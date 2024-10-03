import { Box, Typography, Divider } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

const pageStyles: SxProps<Theme> = {
  padding: (theme: Theme) => theme.spacing(3),
};

const dividerStyles: SxProps<Theme> = {
  borderColor: "gray",
};

const titleStyles: SxProps = {
  fontSize: "1.4rem",
};

interface Props {
  title: string;
  children?: React.ReactNode;
}

const Page = ({ title, children }: Props) => {
  return (
    <Box sx={pageStyles}>
      <Typography sx={titleStyles}>{title}</Typography>
      <Divider sx={dividerStyles} />
      <Box>{children}</Box>
    </Box>
  );
};

export default Page;
