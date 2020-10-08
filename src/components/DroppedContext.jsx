
import React, {createContext, useState, useMemo} from "react"

export const DroppedElement = createContext()
export function DroppedProvider({ children }) {
    const [ dropped , setDropped ] = useState()
    const providerValue = useMemo(() => ({dropped, setDropped}), [dropped, setDropped])
    return (
        <DroppedElement.Provider value={providerValue}>
            {children}
        </DroppedElement.Provider>
    )
}