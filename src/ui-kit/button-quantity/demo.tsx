import { useState } from "react";
import { CenteringContainer } from "../elements/centering-container";
import ButtonQuantity from "./button-quantity";

function ButtonQuantityDemo() {

    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    const [quantity3, setQuantity3] = useState(1);
    const [quantity4, setQuantity4] = useState(1);

    const handlerNewQuantityValue1 = (newQuantityValue: number) => {
        setQuantity1(newQuantityValue);
    };

    const handlerNewQuantityValue2 = (newQuantityValue: number) => {
        setQuantity2(newQuantityValue);
    };

    const handlerNewQuantityValue3 = (newQuantityValue: number) => {
        setQuantity3(newQuantityValue);
    };

    const handlerNewQuantityValue4 = (newQuantityValue: number) => {
        setQuantity4(newQuantityValue);
    };

    return (

        <div>
            <h2>Button</h2>
            <CenteringContainer>
                <ButtonQuantity
                    value={quantity1}
                    disabled={true}
                    onChange={(newQuantityValue: number) => handlerNewQuantityValue1(newQuantityValue)} />
                &nbsp;&nbsp;
                <ButtonQuantity
                    value={quantity2}
                    styleType={"primary"}
                    onChange={(newQuantityValue: number) => handlerNewQuantityValue2(newQuantityValue)} />
                &nbsp;&nbsp;
                <ButtonQuantity
                    value={quantity3}
                    styleType={"secondary"}
                    onChange={(newQuantityValue: number) => handlerNewQuantityValue3(newQuantityValue)} />
                &nbsp;&nbsp;
                <ButtonQuantity
                    value={quantity4}
                    styleType={"danger"}
                    onChange={(newQuantityValue: number) => handlerNewQuantityValue4(newQuantityValue)} />
            </CenteringContainer>
        </div>

    )
}

export default ButtonQuantityDemo