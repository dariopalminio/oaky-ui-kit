import React from "react";
import styled from "styled-components";

//Custom props for attaching additional props to Styled-components
interface ButtonProps {
    readonly styleType: string;
};

//Styled-components
const GradientButton = styled.button<ButtonProps>`
        color: ${props => props.theme[props.styleType].button.color};
        background: ${props => props.theme[props.styleType].button.background};
        box-shadow: ${props => props.theme[props.styleType].button.boxShadow};
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
            color: ${props => props.theme[props.styleType].button.hoverColor};
            transform: translate(0, 0);
            background: ${props => props.theme[props.styleType].button.hoverBackground};
            box-shadow: ${props => props.theme[props.styleType].button.hoverBoxShadow};
            &:after {
                transform: rotate(150deg);
              }
          }
        &:active {
            background: white;
            color: black;
        }
        `;

//Styled-components
const GradientButtonDisabled = styled.button`
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
    styleType?: string
}

/**
 * Customized button
 * Stateless components and controlled component
 */
 export const Button: React.FC<Props> = ({ children, onClick, type, style, disabled, styleType }) => {

    return (
        <>
            {disabled && (
                <GradientButtonDisabled 
                    disabled
                >
                    {children}
                </GradientButtonDisabled>
            )}

            {(!disabled && type) && (
                <GradientButton styleType={styleType ? styleType : "default"}
                    onClick={onClick}
                    type={type}
                    {...(style && 
                        (style= {style})
                      )}
                >
                    {children}
                </GradientButton>
            )}

            {(!disabled && !type) && (
                <GradientButton styleType={styleType ? styleType : "default"}
                    onClick={onClick}
                    style={style ? style : {}}
                >
                    {children}
                </GradientButton>
            )}
        </>
    );
};

export default Button;