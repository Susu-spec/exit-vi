import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export function CursorProvider({ children }) {
    const [cursorVariant, setCursorVariant] = useState('default');
    const [cursorText, setCursorText] = useState('');

    const setView = () => {
        setCursorText('View');
        setCursorVariant('view');
    };

    const setDrag = () => {
        setCursorText("Drag");
        setCursorVariant('drag');
    };

    const setDefault = () => {
        // console.log("default")
        setCursorText("");
        setCursorVariant("default");
    };


    return (
        <CursorContext.Provider value={{
            cursorVariant,
            cursorText,
            setView,
            setDrag,
            setDefault
        }}>
            {children}
        </CursorContext.Provider>
    )
}

export const useCursor = () => useContext(CursorContext);