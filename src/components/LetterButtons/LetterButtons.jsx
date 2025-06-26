const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({ text, usedLetters, onLetterClick }) {
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));
    const originalCharacters = new Set(text.toUpperCase().split(''))

    const buttonStyle = function (letter)
    {
        if(selectedLetters.has(letter))
        {
            return `${originalCharacters.has(letter) ? 'bg-green-500 border-green-700' : 'bg-red-500 border-red-700'}`;
        }
        else
        {
            return 'bg-blue-500 border-blue-700 hover:bg-blue-700'
        }
    }


    const handleClick = function (event) {
        const character = event.target.value;
        onLetterClick?.(character)
    }

    const buttons = ALPHABETS.map((letter) => {
        return (
            <button
                value={letter}
                disabled={selectedLetters.has(letter)}
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