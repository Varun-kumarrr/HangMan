import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"
import { useState } from "react";

function TextInputForm({onSubmit}) {

    const [value,setValue] = useState('');
    const [togle,setTogle] = useState('password');

    function viewText(event)
    {
        event.preventDefault();
        setTogle(prev => prev === 'password' ? 'text' : 'password');
    }

    function handleFormSubmit(event)
    {
        event.preventDefault();
        console.log("form submitted",value);
        onSubmit?.(value);
        
    }

    function handleTextInputChange(event)
    {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                label = "Enter a word or phrase"
                type = {togle}
                value={value}
                onChange={handleTextInputChange}
                />
            </div>
            <div>
                 <Button
                text={togle === "password" ? 'Show' : 'Hide'}
                onClickHandler = {viewText}
                buttonType="button"
                styleType ="warning"
                />
            </div>
            <div>
                <Button
                text = "OK"
                type = "submit"
                />
            </div>
        </form>

    );

}

export default TextInputForm;