import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";
import Header from "../../Components/Header";
const Row1 = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        direction={"row"}
        flexWrap={"wrap"}
        gap={1}
        mb={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
        <div>
          <Button
            sx={{ textTransform: "uppercase" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </div>
      </Box>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={1}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Card
          icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"12,361"}
          subTitle={"Emails Sent"}
          increase={"+14%"}
          data={data1}
          scheme={"nivo"}
        />

        <Card
          icon={
            <PointOfSaleIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"431,225"}
          subTitle={"Sales obtained"}
          increase={"+21%"}
          data={data2}
          scheme={"category10"}
        />

        <Card
          icon={
            <PersonAddIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"32,441"}
          subTitle={"New Clients"}
          increase={"+5%"}
          data={data3}
          scheme={"accent"}
        />
        <Card
          icon={
            <TrafficIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"1,325,134"}
          subTitle={"Traffic Received"}
          increase={"+43%"}
          data={data4}
          scheme={"dark2"}
        />
      </Stack>
    </div>
  );
};

export default Row1;
