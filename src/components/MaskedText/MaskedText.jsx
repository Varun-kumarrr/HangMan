import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters }) {
  if (!text) return <div className="text-red-400">No word selected</div>;

  const letters = getAllCharacters(text, usedLetters).split('');

  return (
    <div>
      {letters.map((letter, index) => (
        <span key={`letter-${index}`} className="inline-block mx-1">
          {letter}
        </span>
      ))}
    </div>
  );
}




export default MaskedText;