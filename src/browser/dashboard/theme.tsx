import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const DashboardThemeProvider = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      { children }
    </ThemeProvider>
  );
};
