import { useContext, useEffect, useMemo } from 'react';
import { routs } from './routs';
import { RouterProvider } from 'react-router-dom';
import DataContext from './contexts/DataContext';
import { getTheme } from './theme';
import { ThemeProvider } from '@emotion/react';

const App = () => {
    const { lang, themeMode } = useContext(DataContext);
    const direction = lang === 'fa' ? 'rtl' : 'ltr';
    const mode = themeMode === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        document.documentElement.setAttribute("dir", direction);
    }, [direction]);
    const theme = useMemo(() => getTheme(direction, mode), [direction, mode]);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={routs} />
        </ThemeProvider>
    );
}

export default App;