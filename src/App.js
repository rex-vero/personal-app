import { useContext, useEffect, useMemo } from 'react';
import { routs } from './routs';
import { RouterProvider } from 'react-router-dom';
import DataContext from './contexts/DataContext';
import { getTheme } from './theme';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const App = () => {
    const { lang, themeMode, setThemeMode, setVerify } = useContext(DataContext);
    const prefer = useMediaQuery('(prefers-color-scheme: dark)');
    const direction = lang === 'fa' ? 'rtl' : 'ltr';
    useEffect(() => {
        const savedToken = JSON.parse(localStorage.getItem('token'));
        if (savedToken) setVerify(true);
    }, [setVerify]);
    useEffect(() => {
        setThemeMode(prefer ? 'dark' : 'light');
    }, [setThemeMode, prefer]);
    useEffect(() => {
        document.documentElement.setAttribute("dir", direction);
    }, [direction]);
    const theme = useMemo(() => getTheme(direction, themeMode), [direction, themeMode]);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={routs} />
        </ThemeProvider>
    );
}

export default App;