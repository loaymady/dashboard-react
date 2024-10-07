import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../PieChart/Pie";
import Bar from "../BarChart/Bar";
import Geo from "../Geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack mt={3} direction={"row"} gap={2} flexWrap={"wrap"}>
      <Paper sx={{ width: "28%", flexGrow: 1, minWidth: "400px" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>{" "}
      <Paper sx={{ width: "33%", flexGrow: 1, minWidth: "400px" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>{" "}
      <Paper sx={{ width: "33%", flexGrow: 1, minWidth: "400px" }}>
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
