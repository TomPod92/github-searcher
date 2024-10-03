import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GithubUsersPage from 'pages/GithubUsersPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <>
          <Box component="main">
            <GithubUsersPage />
          </Box>
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
