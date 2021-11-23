import React, { useState } from 'react';

import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import Landing from "./pages/Landing";

export default function App() {

  const themeDark = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: blue[500]
      },
      text: {
        primary: "#fff",
        secondary: "#fff"
      },
      primary: {
        main: blue[500],
      },
  
      secondary: {
        main: green[500],
      },
    }
  });
  
  const themelight = createMuiTheme({
    palette: {
      type: "light",
      background: {
        default: blue[500]
      },
      text: {
        primary: "black",
        secondary: "#fff"
      },
      primary: {
        main: blue[500],
      },
  
      secondary: {
        main: green[500],
      },
    }
  });

  const [darkState, setDarkState] = useState(true);
  const theme = darkState ? themeDark : themelight;

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing changeTheme={handleThemeChange} isThemeDark={darkState} />
    </ThemeProvider>
  );
}
