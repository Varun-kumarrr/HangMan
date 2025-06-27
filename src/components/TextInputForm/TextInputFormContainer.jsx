import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
    const [value, setValue] = useState('');
    const [hint, setHint] = useState('');
    const [togle, setTogle] = useState('password');

    function viewText(event) {
        event.preventDefault();
        setTogle(prev => prev === 'password' ? 'text' : 'password');
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!value || value.trim() === "") {
            alert("please enter the word")
            return;
        }
        if (!hint || hint.trim() === "") {
            alert("Please enter the hint");
            return;
        }
        console.log("form submitted", value);
        onSubmit?.({ word: value, hint });
    }

    function handleTextInputChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    function handleHintInputChange(event) {
        console.log(event.target.value);
        setHint(event.target.value)
    }
    return (
        <TextInputForm
            handleHintInputChange={handleHintInputChange}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            viewText={viewText}
            togle={togle}
            hint={hint}
        />
    );
}

export default TextInputFormContainer;