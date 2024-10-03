import Page from "common/components/Page";
import GithubUsersList from "features/githubUsers/components/GithubUsersList";

const GithubUsersPage = () => {
  return (
    <Page title="Github users">
      <GithubUsersList />
    </Page>
  );
};

export default GithubUsersPage;
