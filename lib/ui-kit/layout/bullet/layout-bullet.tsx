import React, { useContext, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { LayoutContext } from "../layout-context-provider";
import { ILayoutContext } from "../types";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
    width: 200px;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.4s;
    padding: 0;
    box-sizing:border-box;
    `;

interface BulletSideBarProps {
    readonly isOpen: boolean;
}

const BulletSideBar = styled.div<BulletSideBarProps>`
    position: absolute;
    cursor: pointer;
    height: 22px;
    width: 22px;
    top: 70px;
    left: ${(props) => (props.isOpen ? "230px" : "4px")};
    border: 1px solid grey;
    border-radius: 50%;
    background: white;
    transition: 0.4s;
    z-index: 2;
    :hover {
        background: ${props => props.theme.color['hover'].lighter};
    }
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
const LayoutBullet: React.FC<Props> = ({ topbar, leftbar, footer, children }) => {
    const { sidebarWidth,
        isSidebarOpen,
        toggleSidebar, setSidebarWidth } = useContext(LayoutContext) as ILayoutContext;

    const theme: any = useTheme();

    useEffect(() => {
        setSidebarWidth(theme.layout.sidebarWidthMin);
        if (isSidebarOpen) toggleSidebar();
    }, []);

    return (
        <LayoutContainer>
            <Header>
                {topbar}
            </Header>
            <BulletSideBar isOpen={isSidebarOpen} onClick={() => toggleSidebar()}> 
                {isSidebarOpen
                    ?
                    <RiArrowLeftSLine style={{ marginTop: "1px", marginLeft: "1px" }} />
                    :
                    <RiArrowRightSLine style={{ marginTop: "1px", marginLeft: "1px"  }} />}
            </BulletSideBar>
            <SideBarLeft style={{ width: sidebarWidth }}>
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

export default LayoutBullet;