import React from "react";
import styled from "styled-components";


const ContainerSplitLeft = styled.div`
    width: 50%;
`;


interface IProps {
    id?:string;
    children?: React.ReactNode;
    style?: any;
}

/**
 * Customized button
 * Stateless components and controlled component
 */
const SplitLeft: React.FC<IProps> = (props: IProps) => {

    return (
            <ContainerSplitLeft 
            id={`${props.id ? props.id : ''}split__left`}
            style={props.style || {}}>
                {props.children}
            </ContainerSplitLeft>
    );
};

export default SplitLeft;