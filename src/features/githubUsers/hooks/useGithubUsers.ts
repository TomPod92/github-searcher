import { useSearchParams } from 'react-router-dom';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeys } from 'common/queryKeys';
import { GithubResponse } from 'features/githubUsers/types';

const getGithubUsers = async (context: QueryFunctionContext): Promise<GithubResponse> => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${context.queryKey[1]}&page=${context.queryKey[2]}&per_page=10`,
    );

    return response.data.items;
  } catch (_error) {
    throw new Error('Error while fetching github users');
  }
};

interface Props {
  page: number;
  enabled?: boolean;
}

export const useGithubUsers = ({ page, enabled = true }: Props) => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get('user');
  return useQuery({
    queryKey: [QueryKeys.GithubUsers, user, page],
    queryFn: (context) => getGithubUsers(context),
    enabled: !!user && enabled,
  });
};
