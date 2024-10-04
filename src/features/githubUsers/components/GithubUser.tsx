import { Avatar, Paper, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { GithubUser as GithubUserType } from 'features/githubUsers/types';

const containerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: (theme: Theme) => theme.spacing(1),
  padding: (theme: Theme) => theme.spacing(1),
  marginBottom: (theme: Theme) => theme.spacing(1),
};

interface Props {
  user: GithubUserType;
}

const GithubUser = ({ user }: Props) => {
  return (
    <Paper sx={containerStyles}>
      <Avatar src={user.avatar_url} />
      <Typography>{user.login}</Typography>
    </Paper>
  );
};

export default GithubUser;
