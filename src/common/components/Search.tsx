import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const inputStyles: SxProps<Theme> = {
  borderRadius: '50px',
  marginTop: '20px',
  width: '100%',
};

const searchDebounceTime = 2000;

interface Props {
  isLoading?: boolean;
  sx?: SxProps<Theme>;
}

const Search = ({ isLoading, sx }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('user') || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((prev) => {
        if (searchTerm.trim()) {
          prev.set('user', searchTerm.trim());
        } else {
          prev.delete('user');
        }
        return prev;
      });
    }, searchDebounceTime);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <TextField
      label="Type github username"
      variant="outlined"
      size="small"
      value={searchTerm}
      onChange={handleChange}
      disabled={isLoading}
      sx={{ ...inputStyles, ...sx }}
    />
  );
};

export default Search;
