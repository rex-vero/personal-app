import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [lang, setLang] = useState('en');
    const [themeMode, setThemeMode] = useState('dark');
    const setLanguage = () => setLang(prev => (prev === 'en' ? 'fa' : 'en'));
    const handleTheme = () => setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'))
    return <DataContext.Provider value={{ value, setValue, open, setOpen, snackOpen, setSnackOpen, lang, setLanguage, themeMode, handleTheme }}>{children}</DataContext.Provider>
}

export default DataContext;