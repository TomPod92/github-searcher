import React from 'react';
import { useInView } from 'react-intersection-observer';
import Search from 'common/components/Search';
import { useGithubUsers } from 'features/githubUsers/hooks/useGithubUsers';
import { GithubUser } from '../types';

const GithubUsersList = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGithubUsers();

  return (
    <>
      <Search />
      {data?.pages?.map((group, index) => {
        return (
          <React.Fragment key={index}>
            {group?.map((user: GithubUser) => {
              return <div key={user.id}>{user.login}</div>;
            })}
          </React.Fragment>
        );
      })}
      <button onClick={() => fetchNextPage()} ref={ref}>
        NExt
      </button>
    </>
  );
};

export default GithubUsersList;
