import React from "react";
import styled from "styled-components";

interface PropsCheckBoxSlide {
    id: string;
}

//Styled-components
const CheckBoxSlideGroup = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;

const BtnSwitch = styled.input`
    display: none;
`;

//Styled-components
const CheckBoxSlideStyle = styled.div<PropsCheckBoxSlide>`
.${props => props.id}lbl-switch {
    display: inline-block;
    width: 50px;
    height: 25px;
    background: #aaa;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }
  .${props => props.id}lbl-switch:after {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    background: #fff;
    border-radius: 100px;
    top: 4px;
    left: 5px;
    transition: 0.3s;
  }
  #${props => props.id}btn-switch:checked~ .${props => props.id}lbl-switch {
    background: ${props => props.theme.color['success'].base};
  }
  #${props => props.id}btn-switch:checked~ .${props => props.id}lbl-switch:after {
    left: 28px;
  }
`;

const LabelCheckBoxSlide = styled.div`
    display: inline-block;
    margin-left: 5px;
    text-align: left;
`;

interface Props {
    id: string;
    label: string;
    toggle: () => void;
}

/**
 * Customized checkbox slide
 * Stateless components and controlled component
 */
const CheckBoxSlide: React.FC<Props> = ({ id, label, toggle }) => {

    return (
        <CheckBoxSlideStyle id={id}>
            <CheckBoxSlideGroup>
                <BtnSwitch type="checkbox" id={`${id}btn-switch`} onClick={toggle}/>
                <label
                    htmlFor={`${id}btn-switch`}
                    className={`${id}lbl-switch`} />
                <LabelCheckBoxSlide>
                    <label>{label}</label>
                    </LabelCheckBoxSlide>
            </CheckBoxSlideGroup>
        </CheckBoxSlideStyle>
    );
};

export default CheckBoxSlide;
