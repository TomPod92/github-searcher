import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Search from 'common/components/Search';
import Spacer from 'common/components/Spacer';
import GithubUser from 'features/githubUsers/components/GithubUser';
import { useGithubUsers } from 'features/githubUsers/hooks/useGithubUsers';
import ListSkeleton from './ListSkeleton';

const searchStyles: SxProps<Theme> = {
  marginBottom: '10px',
};

const GithubUsersList = () => {
  const { ref, inView } = useInView();
  const [searchParams] = useSearchParams();
  const user = searchParams.get('user');

  const { data, error, fetchNextPage, isFetchingNextPage, isLoading } = useGithubUsers();
  const isEmpty = data?.pages.flat().length === 0;

  useEffect(() => {
    if (!inView || isEmpty) {
      return;
    }
    fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <Search isLoading={isFetchingNextPage} sx={searchStyles} />
      <Spacer>
        {data?.pages?.map((group, index) => (
          <React.Fragment key={index}>{group?.map((user) => <GithubUser key={user.id} user={user} />)}</React.Fragment>
        ))}
      </Spacer>
      <ListSkeleton isLoading={isLoading} />
      {!user && <Typography>Use input to search for a github user</Typography>}
      {isEmpty && <Typography>No data :(</Typography>}
      {error && <Typography>{error.message}</Typography>}
      {data && <div ref={ref} />}
    </>
  );
};

export default GithubUsersList;
