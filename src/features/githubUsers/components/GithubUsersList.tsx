import { useEffect } from 'react';
import Search from 'common/components/Search';
import { useGithubUsers } from 'features/githubUsers/hooks/useGithubUsers';

const GithubUsersList = () => {
  const { data } = useGithubUsers({ page: 1 });

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <>
      <Search />
    </>
  );
};

export default GithubUsersList;
