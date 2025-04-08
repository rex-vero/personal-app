import { createTheme } from "@mui/material";

export const getTheme = (direction = 'ltr') => createTheme({
    direction,
    palette: {
        mode: 'dark',
        primary: {
            main: '#607D8B'
        },
        secondary: {
            main: '#757575'
        }
    },
    typography: {
        fontFamily: direction === 'ltr' ? 'main, Arial' : 'vazir, Arial'
    }
});