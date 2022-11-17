import { useState } from "react";
import styled from "styled-components";

const SpanTooltip = styled.span`
    display: block;
    font-size: 14px;
    background-color: white;
    color: ${props => props.theme.color['neutral'].darkened};
    border: 1px solid ${props => props.theme.color['neutral'].darkened};
    border-radius: 5px;
    left: 30%;
    padding: 5px 10px;
    position: absolute;
    top: -30px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    &:before {
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid white;
        bottom: -6px;
        content: "";
        height: 0;
        left: 50%;
        margin-left: -6px;
        position: absolute;
        width: 0;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const ContainerTooltip = styled.div`
    position: relative;
    display: block;
    background: yellow;
`;

interface IProps {
    children?: React.ReactNode;
    helpText: string;
    style?: any;
}

const Tooltip: React.FC<IProps> = (props: IProps) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <ContainerTooltip onMouseEnter={() => toggle()}
            onMouseLeave={() => toggle()}>
            {props.children}
            {open &&
                (
                    <SpanTooltip style={props.style || {}}>{props.helpText}</SpanTooltip>
                )
            }
        </ContainerTooltip>
    );
};

export default Tooltip;