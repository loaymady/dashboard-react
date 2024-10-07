import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
export const ThemeContext = createContext();

const ThemeeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const Theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
          }
        : {
            // palette values for dark mode
          }),
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ mode, setMode }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeeProvider;
