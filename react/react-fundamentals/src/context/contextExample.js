import { createContext, useState } from "react";

export const ContextVariable = createContext({
    test: null,
    setTest: () => null,
})

export function TestContextProvider({ children }) {

    const [test, setTest] = useState(true);
    const value = { test, setTest }

    return (<ContextVariable.Provider value={value}>
        {children}
    </ContextVariable.Provider>)

}