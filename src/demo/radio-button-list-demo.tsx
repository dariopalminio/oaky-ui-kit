
import { useState } from 'react';
import { CenteringContainer } from '../ui-kit/elements/centering-container';
import RadioButtonList from '../ui-kit/select-list-radio-button/radio-button-list';



function RadioButtonListDemo() {
    const listToSelect = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, SetSelectedOption] = useState(0);

    const handleSelectOption = async (item: string, index: number) => {
        alert(`You select item ${item} with index ${index}`);
    };

    return (

        <div>
            <h2>RadioButtonListDemo</h2>
            <CenteringContainer>

                <RadioButtonList
                    id="mySelectListAddress"
                    label={'Select any option:'}
                    currentSelected={selectedOption}
                    list={listToSelect}
                    onClickSelect={(item: string, index: number) => handleSelectOption(item, index)}
                    styleType={"secondary"}
                />

            </CenteringContainer>


        </div>

    )
}

export default RadioButtonListDemo

