import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";
import Level8 from "../../assets/Images/7.svg"; // ✅ Import 8th image
import looseSound from "../../assets/sounds/loose.mp3";
import winSound from "../../assets/sounds/win.mp3";

const looseAudio = new Audio(looseSound);
const winAudio = new Audio(winSound);


function PlayGame() {
    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [gameStatus, setGameStatus] = useState("playing");

    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    const hint = location.state?.hint;

    // ✅ SAFETY CHECK
    if (typeof wordSelected !== "string") {
        return (
            <div className="text-center mt-10 text-red-500">
                Invalid game session. Please go back to{" "}
                <Link to="/start" className="underline text-blue-400">
                    Start Game
                </Link>
                .
            </div>
        );
    }

    const handleLetterClick = function (letter) {
        if (!wordSelected.toUpperCase().includes(letter)) {
            const nextStep = step + 1;
            setStep(nextStep);
            if (nextStep === 7) {
                  looseAudio.play();
                setGameStatus("lost");

            }
        }

        const updatedUsedLetters = [...usedLetters, letter];
        setUsedLetters(updatedUsedLetters);

        // ✅ Check win condition
        const allLettersGuessed = wordSelected
            .toUpperCase()
            .split('')
            .every((char) => char === ' ' || updatedUsedLetters.includes(char));

        if (allLettersGuessed) {
            winAudio.play();
            setGameStatus("won");
        }

    };

    return (
        <div className="relative p-6 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            <h1 className="text-3xl font-bold mb-4">Play Game</h1>

            {hint && (
                <p className="text-yellow-400 text-lg mb-2 font-medium">
                    Hint: {hint}
                </p>
            )}

            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr className="my-4 border-gray-600" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="md:basis-1/2">
                    <LetterButtons
                        text={wordSelected}
                        usedLetters={usedLetters}
                        onLetterClick={handleLetterClick}
                        isDisabled={gameStatus !== "playing"}
                    />
                </div>
                <div className="md:basis-1/2 flex items-center justify-center">
                    <HangMan step={step} />
                </div>
            </div>

            <hr className="my-4 border-gray-600" />
            <Link to="/start" className="text-blue-400 underline hover:text-blue-300">
                Start Game
            </Link>

            {/* ✅ Game Over Popup */}
            {gameStatus === "lost" && (
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-xl text-center shadow-xl">
                        <img src={Level8} className="w-48 h-48 mx-auto mb-4" alt="Game Over" />
                        <h2 className="text-2xl font-bold text-red-500 mb-2">Game Over</h2>
                        <p className="mb-4">
                            The word was:{" "}
                            <span className="font-semibold">{wordSelected}</span>
                        </p>
                        <Link
                            to="/start"
                            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition"
                        >
                            Try Again
                        </Link>
                    </div>
                </div>
            )}
            {gameStatus === "won" && (
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-xl text-center shadow-xl">
                        <h2 className="text-2xl font-bold text-green-400 mb-2">🎉 You Win!</h2>
                        <p className="mb-4">
                            Well done! You guessed the word:{" "}
                            <span className="font-semibold">{wordSelected}</span>
                        </p>
                        <Link
                            to="/start"
                            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition"
                        >
                            Play Again
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );
}

export default PlayGame;
