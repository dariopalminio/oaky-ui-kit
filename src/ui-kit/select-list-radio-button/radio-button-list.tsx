import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import styled from "styled-components";
//import "./radio-button-list.css";

//Custom props for attaching additional props to Styled-components
interface RadioButtonProps {
    readonly styleType: string;
};

const StylesRadioButton = styled.div<RadioButtonProps>`
.input_radio_button[type="radio"]{
    display: none;
}

.radio_item_label{
    display: block;
    cursor: pointer;
    font-weight: 200;
    margin-bottom: 5px;
    font-size: 14px;
    text-align: left;
}

.span_radio {
    display: inline-flex;
    align-items: left;
    padding: 2px 2px 2px 2px;
    border-radius: 31px;
    transition: .25s ease;
}

.span_radio:hover,
.input_radio_button[type="radio"]:checked + span{
    background-color: #E9F1F7;
}

.span_radio:before{
    content: "";
    background-color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    transition: .25s ease;
    box-shadow:  inset 0 0 0 2px grey;
}

.input_radio_button[type="radio"]:checked + span:before{
    background: ${props => props.theme[props.styleType].button.background};
}
`

const SelectListGroup = styled.div`
    color: #333;
    float: left;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 20px;
    width: 100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

const RadioButtonsWrapper = styled.div`
    display: block;
    align-items: left;
    justify-content: left;
    margin-left: 0px;
    left: 0px;
`;

const LabelSelectList = styled.label`
    display: block;
    margin-bottom: 2px;
`;


interface Props {
    id: string;
    label?: string;
    onClickSelect?: (item: string, index: number) => void;
    currentSelected?: number;
    style?: any;
    list: string[];
    styleType?: string;
}

/**
 * Select List with Radio Buttons component is used for collecting one data user provided information from a list of options.
 * Stateless components, extensible Style and controlled component
 */
const RadioButtonList: React.FC<Props> = ({ id, label, list, onClickSelect, currentSelected=-1, styleType, style }) => {


    const selectItem = (item: string, index: number) => {
        onClickSelect && onClickSelect(item, index);
    }

    const isSelected = (index: number) => {
        const selected = currentSelected? currentSelected : -1;
        if (selected<0 && selected>=list.length) return false;
        return currentSelected === index;
    }

    const thereIsSomeSelected = (): boolean => {
        return (currentSelected > -1);
    }

    return (
        <StylesRadioButton styleType={styleType ? styleType : "secondary"}>
        <SelectListGroup>
            {label && <LabelSelectList style={!thereIsSomeSelected()? {color: "#cc0033"} : {}}>{label}</LabelSelectList>}
            <RadioButtonsWrapper>
                {list.map((item: string, index: number) => {
                    return (
                        <label key={index} className="radio_item_label">
                            <input key={'inputRadioButtons'+id+index.toString()}
                            className="input_radio_button" type="radio" id="html" name="radio" 
                            onClick={()=>selectItem(item,index)} defaultChecked={isSelected(index)}
                            />
                            <span className="span_radio">{item}</span>
                        </label>
                    )
                }
                )}
            </RadioButtonsWrapper>
        </SelectListGroup>
        </StylesRadioButton>
    );
};

export default RadioButtonList;