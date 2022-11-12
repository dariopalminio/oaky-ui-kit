import styled from "styled-components";
import { ThemesEnum } from "../theme/themes";

//Styled-components
const QtyContainer = styled.div`
    display: flex;
    border: 1px solid rgb(235, 235, 235);
    text-align: center;
    width: 100px;
    margin: 0 auto;
    margin-bottom: 0; 
    justify-content: center;
    `;

//Custom props for attaching additional props to Styled-components
interface InputQtyProps {
    readonly styleType: string;
};


const InputQtyPlus = styled.input<InputQtyProps>`
    color: ${props => props.theme[props.styleType].button.color};
    width: 30px;
    height: 30px;
    background: ${props => props.theme[props.styleType].button.background};
    border: 0px;
    cursor: pointer;
    &:hover {
    transform: translate(0, 0);
      background: ${props => props.theme[props.styleType].button.hoverBackground};
      box-shadow: ${props => props.theme[props.styleType].button.hoverBoxShadow};
    }
  `;

const InputQtyMinus = styled.input<InputQtyProps>`
    color: ${props => props.theme[props.styleType].button.color};
    width: 30px;
    height: 30px;
    background: ${props => props.theme[props.styleType].button.background};
    border: 0px;
    cursor: pointer;
    &:hover {
      transform: translate(0, 0);
      background: ${props => props.theme[props.styleType].button.hoverBackground};
      box-shadow: ${props => props.theme[props.styleType].button.hoverBoxShadow};
    }
  `;

const InputQty = styled.input`
    width: 40px;
    height: 30px;
    border: 0px;
    text-align: center;

  `;

interface Props {
    value: number;
    onChange: (newQuantityValue: number) => void;
    styleType?: string;
    disabled?: boolean;
}

/**
 * Customized button for quantity number selection
 * Stateless components and controlled component
 */
const ButtonQuantity: React.FC<Props> = ({ value, onChange, styleType, disabled }) => {

    const handlerQtyminus = () => {
        let newValue: number = value;
        if (value > 0) newValue = (value - 1);
        onChange(newValue);
    };

    const handlerQtyplus = () => {
        const newValue = (value + 1);
        onChange(newValue);
    };

    const getStyleType = () => {
        if (!styleType || styleType === undefined || styleType === null) {
            return ThemesEnum.primary;
        }
        const dis: boolean = disabled ? disabled : false;
        if (dis === true) return ThemesEnum.disabled;
        const st = styleType ? styleType : "primary";
        const arr: string[] = Object.keys(ThemesEnum);
        if (arr.includes(st)) return st;
        return ThemesEnum.primary;
    }

    return (
        <QtyContainer>
            <InputQtyMinus
                type='button'
                value='-'
                onClick={() => handlerQtyminus()}
                styleType={getStyleType()}
                disabled={disabled ? disabled : false}
            />
            <InputQty
                type='text'
                name='quantity'
                value={value}
                onChange={() => { }} />
            <InputQtyPlus
                type='button'
                value='+'
                onClick={() => handlerQtyplus()}
                styleType={getStyleType()}
                disabled={disabled ? disabled : false} />
        </QtyContainer>
    );
};

export default ButtonQuantity;
