import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        align="center"
        color={theme.palette.text.primary}
        variant="h5"
      >
        Wrong page , Please try again ..
        <br />
      </Typography>
    </Box>
  );
};

export default NotFound;
