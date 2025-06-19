import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"


function TextInputForm({viewText , handleFormSubmit , handleTextInputChange , value , togle}) {

    

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
                buttonType = "submit"
                />
            </div>
        </form>

    );

}

export default TextInputForm;