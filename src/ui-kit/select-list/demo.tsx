import { useState } from 'react';
import { CenteringContainer } from '../elements/centering-container';
import SelectList from './select-list';


function SelectListDemo() {
    const listToSelect = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, SetSelectedOption] = useState(-1);

    const handleDelete = async (index: number) => {
        alert('Delete element was clicked to element with index: ' + index);
    };

    const handleClickSelect = async (index: number) => {
        SetSelectedOption(index);
    };

    return (

        <div>
            <h2>SelectList</h2>
            <CenteringContainer>

                <SelectList
                    id="mySelectList"
                    label="Select any option:"
                    currentSelected={selectedOption}
                    list={listToSelect}
                    onClickSelect={(item, index) => handleClickSelect(index)}
                    onClickDelete={(item, index) => handleDelete(index)} 
                    withDelete={true}
                    />
            </CenteringContainer>


        </div>

    )
}

export default SelectListDemo

