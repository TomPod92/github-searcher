import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  direction?: 'column' | 'row';
  space?: number;
  children: React.ReactNode;
}

// functional programming - composition
const Spacer = ({ direction = 'column', space = 10, children }: Props) => {
  const containerStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: direction,
    gap: `${space}px`,
  };

  return <Box sx={containerStyles}>{children}</Box>;
};

export default Spacer;
