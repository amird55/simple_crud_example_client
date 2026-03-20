//npm install react-router @mui/material @emotion/react @emotion/styled @mui/icons-material   stylis-plugin-rtl @emotion/cache 

import './App.css'

import { RouterProvider} from 'react-router';
import router from "./Routers/main_R";

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme_params.jsx';
import { CssBaseline } from '@mui/material';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function App() {

  return (
      <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
              <CssBaseline /> {/* This normalizes the styles */}
              <RouterProvider router={router} />
          </ThemeProvider>
      </CacheProvider>
  )
}

export default App
