import React from "react";
import styled from "styled-components";
import { ThemesEnum } from "../theme/themes";

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
    color: ${props => props.theme.color['text'].darkened};
    background: ${props => props.theme.color['hover'].lighter};
}

.span_radio:before{
    content: "";
    background-color: ${props => props.theme.color['text'].lighter};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    transition: .25s ease;
    box-shadow:  inset 0 0 0 2px grey;
}

.input_radio_button[type="radio"]:checked + span:before{
    color: ${props => props.theme.color['text'].darkened};
    background: ${props => props.theme.color['hover'].lighter};
}
`

const SelectListGroup = styled.div`
    color: ${props => props.theme.color['text'].darkened};
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
    styleType?: "disabled" | "primary" | "secondary" | "danger";
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

    const getStyleType = () => {
        if (!styleType || styleType === undefined || styleType === null) {
            return ThemesEnum.primary;
        }
        const st=  styleType ? styleType : ThemesEnum.secondary;
        const arr: string [] = Object.keys(ThemesEnum);
        if (arr.includes(st)) return st;
        return ThemesEnum.secondary;
     }
     
    return (
        <StylesRadioButton styleType={getStyleType()}>
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