import { createTheme } from "@mui/material";

export const getTheme = (direction = 'ltr', mode = 'dark') => createTheme({
    direction,
    palette: {
        mode,
        primary: {
            main: 'rgb(128, 128, 128)'
        },
        secondary: {
            main: '#757575'
        }
    },
    typography: {
        fontFamily: direction === 'ltr' ? 'main, Arial' : 'vazir, Arial'
    }
});