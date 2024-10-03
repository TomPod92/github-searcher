import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useGithubUsers } from 'features/githubUsers/hooks/useGithubUsers';

const inputStyles: SxProps<Theme> = {
  // background: 'gray'
  backgroundColor: (theme) => theme.palette.grey[200],
  borderRadius: '50px',
};

const GithubUsersList = () => {
  const { data } = useGithubUsers({ user: 'John', page: 1 });

  useEffect(() => {
    console.log('data', data);
  }, [data]);
  return (
    <>
      <TextField label="Type github username" variant="outlined" size="small" sx={inputStyles} />
    </>
  );
};

export default GithubUsersList;
