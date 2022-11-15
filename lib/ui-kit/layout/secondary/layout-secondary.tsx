import React, { useContext, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { LayoutContext } from "../layout-context-provider";
import { ILayoutContext } from "../types";


//Styled-components
const LayoutContainer = styled.div`
        width: 100%;
    `;

const Header = styled.div`
    width: 100%;
    position: relative;
    `;


interface OpenConditionalProps {
    readonly isOpen?: boolean;
    readonly dynamicWidth?: number;
}

const SideBarLeft = styled.div`
    position: absolute;
    height: 95vh;
    width: 4rem;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.4s;
    padding: 0;
    box-sizing:border-box;
    `;

    const MainSection = styled.section<OpenConditionalProps>`
    position: relative;
    width: calc(100% - ${props => props.dynamicWidth}px);
    float: right;
`;

const ContentSection = styled.section`
    position: relative;
    width: 100%;
`;

const FooterSection = styled.section`
    position: relative;
    height: 23px;
    width: 100%;
`;

interface Props {
    topbar: React.ReactNode; //Render Prop for navbar
    leftbar: React.ReactNode; //Render Prop for sidebar
    footer: React.ReactNode; //Render Prop for footer
    children?: React.ReactNode; //for content
}

/**
 * Customized Layout
 * 
 * Patterns: Render Prop, Presentation Component and Context Provider
 */
const LayoutSecondary: React.FC<Props> = ({ topbar, leftbar, footer, children }) => {
    const { sidebarWidth,
        isSidebarOpen,
        toggleSidebar, setSidebarWidth } = useContext(LayoutContext) as ILayoutContext;

    const theme: any = useTheme();

    useEffect(() => {
        setSidebarWidth( theme['secondary'].layout.sidebarWidthMin);
        if (isSidebarOpen) toggleSidebar('secondary');
    }, []);

        
    const handleOpen = () => {
        if (!isSidebarOpen) toggleSidebar('secondary');
    };

    const handleClose = () => {
        if (isSidebarOpen) toggleSidebar('secondary');
    };

    
    return (
        <LayoutContainer>
            <Header>
                {topbar}
            </Header>
            <SideBarLeft
                style={{ width: sidebarWidth }}
                onMouseEnter={() => handleOpen()}
                onMouseLeave={() => handleClose()}
            >
                {leftbar}
            </SideBarLeft>

            <MainSection dynamicWidth={sidebarWidth}>
            <ContentSection>
                    {children}
                </ContentSection>
                <FooterSection>
                    {footer}
                </FooterSection>
            </MainSection>
        </LayoutContainer>
    );
};

export default LayoutSecondary;