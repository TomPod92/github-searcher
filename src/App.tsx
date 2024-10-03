import { Box } from "@mui/material";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Page from "common/components/Page";
import GithubUsersList from "features/githubUsers/components/GithubUsersList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Box component="main">
          <Page title="Github users list">
            <GithubUsersList />
          </Page>
        </Box>
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    </QueryClientProvider>
  );
};

export default App;
