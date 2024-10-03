import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GithubUsersList from "features/githubUsers/components/GithubUsersList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <main>
          <GithubUsersList />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    </QueryClientProvider>
  );
};

export default App;
