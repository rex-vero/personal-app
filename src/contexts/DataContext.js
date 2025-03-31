import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    return <DataContext.Provider value={{ value, setValue, open, setOpen }}>{children}</DataContext.Provider>
}

export default DataContext;