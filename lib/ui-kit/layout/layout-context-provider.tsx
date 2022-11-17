import { FC, useEffect, useState } from "react";
import { createContext } from 'react';
import { useTheme } from "styled-components";
import { ILayoutContext } from "./types";


// Initial values for global user context 
export const ILayoutContextDefaultValues: ILayoutContext = {
    sidebarWidth: 0,
    isSidebarOpen: false,
    toggleSidebar: () => { },
    setSidebarWidth: (value: number) => { }
};

// Global cart context
export const LayoutContext = createContext<ILayoutContext>(ILayoutContextDefaultValues);

interface Props {
    children?: React.ReactNode;
}

/**
 * Layout Context Provider
 */
const LayoutContextProvider: FC<Props> = ({ children }) => {
    const theme: any = useTheme();
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {

    }, []);

    function toggleSidebar() {
        setSidebarWidth(isSidebarOpen? theme.layout.sidebarWidthMin : theme.layout.sidebarWidthMax);
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <LayoutContext.Provider
            value={{
                sidebarWidth,
                isSidebarOpen,
                toggleSidebar,
                setSidebarWidth
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;

