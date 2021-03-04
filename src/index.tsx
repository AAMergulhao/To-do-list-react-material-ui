
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import "./assets/global.css"
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
