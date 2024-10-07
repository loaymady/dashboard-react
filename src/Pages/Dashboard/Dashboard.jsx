import { Box, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Dashboard = () => {
  return (
    <Box>
      <Stack direction={"column"} gap={1} justifyContent={"space-between"}>
        <Row1 />
        <Row2 />
        <Row3 />
      </Stack>
    </Box>
  );
};

export default Dashboard;
