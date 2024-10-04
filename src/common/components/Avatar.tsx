import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar as MUIAvatar, AvatarProps, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const placeholderImageStyles: SxProps<Theme> = {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  border: '1px solid black',
  borderRadius: '50%',
};

interface Props extends AvatarProps {}

const Avatar = (props: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      {imageLoading && (
        <Box sx={placeholderImageStyles}>
          <PersonIcon />
        </Box>
      )}
      <MUIAvatar
        imgProps={{ onError: () => setImageLoading(true), onLoad: () => setImageLoading(false) }}
        sx={{ width: imageLoading ? 0 : '40' }}
        {...props}
      />
    </>
  );
};

export default Avatar;
