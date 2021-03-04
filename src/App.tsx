import React, { useEffect, useState } from 'react';

import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import Landing from "./pages/Landing";

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

export default function App() {

  const [isThemeDark, setIsThemeDark] = useState(true);

  const changeTheme = () => {
    if (!isThemeDark) {
      setIsThemeDark(true);
    } else {
      setIsThemeDark(false);
    }

  };
  console.log(isThemeDark);
  console.log(isThemeDark ? "themeDark" : "themelight");

  return (
    <ThemeProvider theme={isThemeDark ? themeDark : themelight}>
      <CssBaseline />
      <Landing changeTheme={changeTheme} isThemeDark={isThemeDark} />
    </ThemeProvider>
  );
}
