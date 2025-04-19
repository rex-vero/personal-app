import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [verify, setVerify] = useState(false);
    const [lang, setLang] = useState('en');
    const [themeMode, setThemeMode] = useState('dark');
    return <DataContext.Provider value={{ value, setValue, open, setOpen, snackOpen, setSnackOpen, lang, setLang, themeMode, setThemeMode, verify, setVerify }}>{children}</DataContext.Provider>
}

export default DataContext;