import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({onSubmit})
{
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
        <TextInputForm
        handleFormSubmit = {handleFormSubmit}
        handleTextInputChange = {handleTextInputChange}
        viewText = {viewText}
        togle={togle}
        />
    );
}

export default TextInputFormContainer;