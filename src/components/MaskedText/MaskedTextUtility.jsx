export function getAllCharacters(word, usedLetters) {
    const usedLetters = usedLetters.map((ele) => ele.toUpperCase());
    const guessedLetters = new Set(usedLetters);
    const characters = word.toUpperCase().split('').map((char) => {
        if (guessedLetters.has(char)) {
            return char;
        }
        return '_';
    });
    return characters.join('');
}