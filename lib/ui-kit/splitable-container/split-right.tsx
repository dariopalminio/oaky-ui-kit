import React from "react";
import styled from "styled-components";


const ContainerSplitRight = styled.div`
    flex: 1; 
    background: white;
`;


interface IProps {
    id?: string;
    children?: React.ReactNode;
    style?: any;
}

/**
 * Customized button
 * Stateless components and controlled component
 */
const SplitRight: React.FC<IProps> = (props: IProps) => {

    return (
        <ContainerSplitRight
            id={`${props.id ? props.id : ''}split__right`}
            style={props.style || {}}>
            {props.children}
        </ContainerSplitRight>
    );
};

export default SplitRight;