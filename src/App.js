import { useContext, useEffect, useMemo } from 'react';
import { routs } from './routs';
import { RouterProvider } from 'react-router-dom';
import DataContext from './contexts/DataContext';
import { getTheme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const App = () => {
    const { lang, themeMode, setThemeMode } = useContext(DataContext);
    const prefer = useMediaQuery('(prefers-color-scheme: dark)');
    const direction = lang === 'fa' ? 'rtl' : 'ltr';
    useEffect(() => {
        setThemeMode(prefer ? 'dark' : 'light');
    }, [setThemeMode, prefer]);
    useEffect(() => {
        document.documentElement.setAttribute("dir", direction);
    }, [direction]);
    const mode = themeMode;
    const theme = useMemo(() => getTheme(direction, mode), [direction, mode]);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={routs} />
        </ThemeProvider>
    );
}

export default App;