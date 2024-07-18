import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { themeFinanzas } from "./themeFinanzasApp";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={themeFinanzas}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
