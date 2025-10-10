import { createContext, useState } from "react";

export const ContextVariable = createContext({
    test: null,
    setTest: () => null,
})

export function TestContextProvider({ children }) {

    const [test, setTest] = useState(true);

    return (<ContextVariable.Provider value={{ test, setTest }}>
        {children}
    </ContextVariable.Provider>)

}