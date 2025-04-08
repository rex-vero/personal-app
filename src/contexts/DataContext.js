import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [lang, setLang] = useState('en');
    const setLanguage = () => setLang(prev => (prev === 'en' ? 'fa' : 'en'))
    return <DataContext.Provider value={{ value, setValue, open, setOpen, snackOpen, setSnackOpen, lang, setLanguage }}>{children}</DataContext.Provider>
}

export default DataContext;