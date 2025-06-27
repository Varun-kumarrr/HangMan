import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"


function TextInputForm({ viewText, handleFormSubmit, handleTextInputChange, value, togle, handleHintInputChange, hint }) {



    return (
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label="Enter a word or phrase"
                    type={togle}
                    value={value}
                    onChange={handleTextInputChange}
                />
                <TextInput
                    label="Enter a Hint"
                    value={hint}
                    onChange={handleHintInputChange}
                />
            </div>
            <div className="flex justify-between gap-2">
                <Button
                    text={togle === "password" ? 'Show' : 'Hide'}
                    onClickHandler={viewText}
                    buttonType="button"
                    styleType="warning"
                />
                <Button
                    text="OK"
                    buttonType="submit"
                />
            </div>


        </form>

    );

}

export default TextInputForm;