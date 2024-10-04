import { useSearchParams } from 'react-router-dom';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeys } from 'common/queryKeys';
import { GithubUser } from '../types';

const getGithubUsers = async (context: QueryFunctionContext): Promise<GithubUser[]> => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${context.queryKey[1]}&page=${context.pageParam}&per_page=20`,
    );

    return response.data.items;
  } catch (_error) {
    throw new Error('Error while fetching github users');
  }
};

export const useGithubUsers = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get('user');

  return useInfiniteQuery({
    queryKey: [QueryKeys.GithubUsers, user],
    queryFn: getGithubUsers,
    initialPageParam: 0,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    enabled: !!user,
  });
};
