import React from "react";
import { arrayBuffer } from "stream/consumers";
import styled from "styled-components";
import { ThemesEnum } from "../theme/themes";

//Custom props for attaching additional props to Styled-components
interface ButtonProps {
    readonly styleType: string;
};

//Styled-components
const ButtonWithShadow = styled.button<ButtonProps>`
        color: ${props => props.theme.color['text'].lighter};
        background: ${props => props.theme.color[props.styleType].base}; 
        box-shadow: 0 0 0 0 rgba(145, 64, 248, 0.5), 0 0 0 0 rgba(39, 200, 255, 0.5);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
        height:30px;
        &:after {
            color: rgb(255, 255, 255);
            content: "";
            position: absolute;
            z-index: -1;
            transition: transform 0.5s ease;
          }
        &:hover{
            color: ${props => props.theme.color['text'].darkened};
            background: ${props => props.theme.color[props.styleType].lighter}; 
            box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
          }
        &:active {
            background: white;
            color: ${props => props.theme.color['text'].base};
        }
        `;

const ButtonDisabled = styled.button`
        color: rgb(255, 255, 255);
        background: linear-gradient(45deg, #8a8a8a 30%, #bebebe 90%);
        opacity: 0.5;
        box-shadow: 0 0 0 0 rgba(145, 64, 248, 0.5), 0 0 0 0 rgba(39, 200, 255, 0.5);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        border: 0px;
        border-radius: 5px;
        height:30px;
        `;

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    style?: any;
    disabled?: boolean,
    styleType?: "warning" | "info" | "success" | "neutral" |"disabled" | "primary" | "secondary" | "danger";
}

/**
 * Customized button
 * Stateless components and controlled component
 */
const Button: React.FC<Props> = ({ children, onClick, type, style, disabled, styleType }) => {

    const getStyleType = () => {
        if (!styleType || styleType === undefined || styleType === null) {
            return ThemesEnum.primary;
        }
        const st = styleType ? styleType : "primary";
        const arr: string[] = Object.keys(ThemesEnum);
        if (arr.includes(st)) return st;
        return ThemesEnum.primary;
    }

    return (
        <>
            {disabled && (
                <ButtonDisabled disabled>
                    {children}
                </ButtonDisabled>
            )}

            {(!disabled && type) && (
                <ButtonWithShadow styleType={getStyleType()}
                    onClick={onClick}
                    type={type}
                    {...(style &&
                        (style = { style })
                    )}
                >
                    {children}
                </ButtonWithShadow>
            )}

            {(!disabled && !type) && (
                <ButtonWithShadow styleType={getStyleType()}
                    onClick={onClick}
                    style={style ? style : {}}
                >
                    {children}
                </ButtonWithShadow>
            )}
        </>
    );
};

export default Button;