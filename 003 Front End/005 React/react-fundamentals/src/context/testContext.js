// 1. Define your Context - global Variable 
// 2. Define your Provider - Publisher 
// 3. Define your useContext - hook - Subscriber 

import { useState, createContext } from "react";

export const TestContext = createContext();

export function TestContextProvider({ children }) {

    const [test, setTest] = useState(true);

    return (<TestContext.Provider value={{ test, setTest }}>{children}</TestContext.Provider>)

}