export function getAllCharacters(word, usedLetters) {
  if (typeof word !== 'string') return '';

  usedLetters = usedLetters.map((ele) => ele.toUpperCase());
  const guessedLetters = new Set(usedLetters);

  return word.toUpperCase().split('').map((char) => {
    return guessedLetters.has(char) ? char : '_';
  }).join('');
}
