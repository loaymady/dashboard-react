import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Transactions } from "./data";
import Line from "../LineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";

const Row2 = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={"row"} flexWrap={"Wrap"} gap={2} mt={3}>
        <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
          <Stack
            alignItems={"center"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
                fontWeight={"bold"}
              >
                Revenue Generated
              </Typography>
              <Typography variant="body2" ml={4}>
                $59,342.32
              </Typography>
            </Box>

            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>
          <Line isDashboard={true} />
        </Paper>
        <Box
          sx={{
            overflow: "auto",
            borderRadius: "4px",
            minWidth: "280px",
            maxHeight: 355,
            flexGrow: 1,
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>

          {Transactions.map(({ txId, user, date, cost }) => (
            <Paper
              key={txId}
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{txId}</Typography>
                <Typography variant="body2">{user}</Typography>
              </Box>
              <Typography variant="body1">{date}</Typography>
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${cost}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Stack>
    </div>
  );
};

export default Row2;
