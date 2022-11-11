import { useState } from "react";
import TextField from "../ui-kit/text-field/text-field"


function TextFieldDemo() {

    const [value, setValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleChange = async (val: string) => {
        setValue(val);
        if (val === ''){
            setIsValid(false)
        }else{
            setIsValid(true)
        }
    };

    return (

        <div>
            <h2>TextField</h2>

            <div >
                <TextField
                    id="standard-basic-1"
                    label={'Text Field'}
                    placeholder="Here text..."
                    onChange={(e) => handleChange(e.target.value)}
                    value={value}
                    {...(!isValid && { error: true, helperText: 'input error' })}
                />
            </div>
        </div>

    )
}

export default TextFieldDemo