import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";


function StartGame() {
    const navigate = useNavigate();

    function handleSubmit({ word, hint }) {
        navigate('/play', { state: { wordSelected: word, hint } });
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                Enter a Word to Begin!
            </h1>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
                <TextInputFormContainer onSubmit={handleSubmit} />
            </div>

        </div>
    );
}

export default StartGame;