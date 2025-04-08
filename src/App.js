import { useContext, useEffect, useMemo } from 'react';
import { routs } from './routs';
import { RouterProvider } from 'react-router-dom';
import DataContext from './contexts/DataContext';
import { getTheme } from './theme';
import { ThemeProvider } from '@emotion/react';

const App = () => {
    const { lang } = useContext(DataContext);
    const direction = lang === 'fa' ? 'rtl' : 'ltr';
    useEffect(() => {
        document.documentElement.setAttribute("dir", direction);
    }, [direction]);
    const theme = useMemo(() => getTheme(direction), [direction]);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={routs} />
        </ThemeProvider>
    );
}

export default App;