import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useGithubUsers } from 'features/githubUsers/hooks/useGithubUsers';

const inputStyles: SxProps<Theme> = {
  borderRadius: '50px',
  marginTop: '20px',
  width: '100%',
};

const searchDebounceTime = 2000;

const GithubUsersList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('user') || '');
  const { data } = useGithubUsers({ user: 'John', page: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((prev) => {
        if (searchTerm) {
          prev.set('user', searchTerm);
        } else {
          prev.delete('user');
        }
        return prev;
      });
    }, searchDebounceTime);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <>
      <TextField
        label="Type github username"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleChange}
        sx={inputStyles}
      />
    </>
  );
};

export default GithubUsersList;
