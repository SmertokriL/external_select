import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes';

const container = document.getElementById('root');
const root = createRoot(container!);
// eslint-disable-next-line jest/require-hook
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
