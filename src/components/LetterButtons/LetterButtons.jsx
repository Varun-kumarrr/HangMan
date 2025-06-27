import clickSound from "../../assets/sounds/click.mp3";
const clickAudio = new Audio(clickSound);
const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({ text, usedLetters, onLetterClick, isDisabled }) {
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));
    const originalCharacters = new Set(text.toUpperCase().split(''))

    const buttonStyle = function (letter) {
        if (selectedLetters.has(letter)) {
            return `${originalCharacters.has(letter) ? 'bg-green-500 border-green-700' : 'bg-red-500 border-red-700'}`;
        }
        else {
            return 'bg-blue-500 border-blue-700 hover:bg-blue-700'
        }
    }


    const handleClick = function (event) {
        if (isDisabled) return;
        const character = event.target.value;
        onLetterClick?.(character);
        clickAudio.currentTime = 0;
        clickAudio.play();
    }

    const buttons = ALPHABETS.map((letter) => {
        return (
            <button
                value={letter}
                disabled={isDisabled || selectedLetters.has(letter)}
                onClick={handleClick}
                className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(letter)} `}
                key={`button-${letter}`}>
                {letter}
            </button>
        );
    });


    return (
        <>
            {buttons}
        </>
    );
}

export default LetterButtons;