
import { useState } from 'react';
import { CenteringContainer } from '../elements/centering-container';
import SelectOpts from './select-opts';

function SelectOptsDemo() {
    const listToSelect = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleChange = (selectedOption: string) => {
        setSelectedOption(selectedOption);
    };

    return (

        <div>
            <h2>SelectOpts</h2>
            <CenteringContainer>

                <SelectOpts
                    label={'Select any option:'}
                    list={listToSelect}
                    selectedOption={selectedOption}
                    setSelectedOption={(selectedOption) => handleChange(selectedOption)} />
            </CenteringContainer>


        </div>

    )
}

export default SelectOptsDemo
