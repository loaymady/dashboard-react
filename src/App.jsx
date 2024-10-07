import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Drawerr from "./Components/Drawerr";
import Appbar from "./Components/AppBar";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import "./index.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawerr open={open} handleDrawerClose={handleDrawerClose} />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, maxWidth: "100% !important" }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
