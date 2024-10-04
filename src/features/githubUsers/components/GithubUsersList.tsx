import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Search from 'common/components/Search';
import GithubUser from 'features/githubUsers/components/GithubUser';
import { useGithubUsers } from 'features/githubUsers/hooks/useGithubUsers';

const searchStyles: SxProps<Theme> = {
  marginBottom: '10px',
};

const GithubUsersList = () => {
  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, isFetchingNextPage } = useGithubUsers();

  useEffect(() => {
    if (!inView) {
      return;
    }
    fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <Search isLoading={isFetchingNextPage} sx={searchStyles} />
      {data?.pages?.map((group, index) => {
        return (
          <React.Fragment key={index}>
            {group?.map((user) => {
              return <GithubUser key={user.id} user={user} />;
            })}
          </React.Fragment>
        );
      })}
      {error && <Typography>{error.message}</Typography>}
      {data && <div ref={ref} />}
    </>
  );
};

export default GithubUsersList;
