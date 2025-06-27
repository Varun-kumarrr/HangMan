import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    function handleClick()
    {
        navigate('/start')
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
        Welcome to Hangman!
      </h1>

      <p className="max-w-2xl text-center text-lg text-gray-300 mb-8 leading-relaxed">
        Hangman is a thrilling word-guessing game that challenges your vocabulary and logic skills. 
        A hidden word is chosen, and you must guess it one letter at a time. But be warned — every incorrect guess brings you closer to the gallows. 
        Can you crack the word before it’s too late? Play now and test your wits!
      </p>

      <button className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-xl shadow-md hover:bg-yellow-400 transition duration-300"
      onClick={handleClick}
      >
        Start Game
      </button>
    </div>
  );
}

export default HomePage;
