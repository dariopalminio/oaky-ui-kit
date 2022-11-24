import React from "react";
import styled from "styled-components";


const InternalSplitBar = styled.div`
    background-color: grey;
    border-right: 1px solid #32a1ce;
    border-left: 1px solid #BCBCBC;
    width: 3px;
    height: 100%;
    cursor: col-resize;
    `;


interface IProps {
    id?: string;
    style?: any;
}

/**
 * Customized button
 * Stateless components and controlled component
 */
const SplitBar: React.FC<IProps> = (props: IProps) => {

    return (
        <InternalSplitBar
            id={`${props.id ? props.id : ''}split__bar`}
            style={props.style || {}} />
    );
};

export default SplitBar;