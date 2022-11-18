import React from "react";
import styled, { useTheme } from "styled-components";

const Popup = styled.div`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`;

//Custom props for attaching additional props to Styled-components
interface OpenConditionalProps {
    readonly severityColor: string;
}

const PopupInner = styled.span<OpenConditionalProps>`
    position: absolute;
    height: 150px;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: ${(props) => props.severityColor};
    border-radius: 5px;
    padding: 25px;
    text-align: center;
`;

const ParagraphTextMsg = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.color['text'].lighter};
`;

const ButtonPopupClose = styled.button`
    position: absolute;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    background: transparent;
    p {
        position: absolute;
        text-align: center;
        font-size: 25px;
        top: -6px;
        margin-top: 0px;
        left: 4px;
        font-weight: bold;
        color: white;
        &:active{
            color: black;
        }
    }
    &:hover {
        background: #79BFF3;
    }
    &:active {
        background: white;
    }
`;

interface Props {
    children?: React.ReactNode;
    severity?: "info" | "error" | "warning" | "success" | undefined;
    toggle: () => void;
    style?: any;
}

/**
 * Customized AlertPopup
 * Stateless components
 */
const AlertPopup: React.FC<Props> = ({ severity, children, toggle, style }) => {

    const theme: any = useTheme();
    
    const getBackgroundBySeverity = () => {
        switch (severity) {
            case 'success':
                return theme.color['success'].base;
            case 'error':
                return theme.color['error'].base;
            case 'info':
                return theme.color['info'].base;
            case 'warning':
                return theme.color['warning'].base;
            default:
                return '#42bdff';
        }
    };

    return (
        <Popup>
            <PopupInner severityColor={getBackgroundBySeverity()}
                {...(style &&
                    (style = { style })
                )}>
                <ParagraphTextMsg>{children}</ParagraphTextMsg>
                <ButtonPopupClose onClick={() => toggle()}>
                    <p>&times;</p></ButtonPopupClose>
            </PopupInner>
        </Popup>
    );
};

export default AlertPopup;