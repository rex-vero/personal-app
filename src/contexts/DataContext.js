import { createContext, useState } from "react";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    return <DataContext.Provider value={{ value, setValue }}>{children}</DataContext.Provider>
}

export default DataContext;