import { ThemeProvider } from '@mui/material';
import './assets/scss/App.scss';
import { routs } from './routs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme } from './theme';

const App = () => {
  const router = createBrowserRouter(routs);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;