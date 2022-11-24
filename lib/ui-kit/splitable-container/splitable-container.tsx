import React from "react";
import styled from "styled-components";
import useSplitableContainer from "./splitable-container-hook";

const ContainerSplit = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

interface IProps {
    id?: string;
    children?: React.ReactNode;
    style?: any;
}

/**
 * SplitableContainer
 * Compound component, Stateless components and controlled component
 * 
 * Example of use:
 *               <SplitableContainer id={"idSpliter"}>
 *                    <SplitLeft id={"idSpliter"} style={{ background: "#F0D9FA" }}>
 *                        Left
 *                   </SplitLeft>
 *                   <SplitBar id={"idSpliter"}></SplitBar>
 *                   <SplitRight id={"idSpliter"} style={{ background: "#F2FFCF" }}>
 *                       Right
 *                   </SplitRight>
 *                </SplitableContainer>
 *
 */
const SplitableContainer: React.FC<IProps> = (props: IProps) => {
    useSplitableContainer(props.id);

    return (
        <ContainerSplit
            id={`${props.id ? props.id : ''}container__split`}
            style={props.style || {}}>
            {props.children}
        </ContainerSplit>
    );
};

export default SplitableContainer;