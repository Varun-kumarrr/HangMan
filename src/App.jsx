import { Route, Routes } from "react-router-dom";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame"; 


function App() {
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to HangMan</h1>
    //   <TextInputFormContainer
    //   onSubmit={(value)=>{console.log("value coming from the hidden form is",value);
    //   }}
    //   />
    // </div>
    <>
    <div>Nav Bar</div>
    <Routes>
      <Route path="/play"  element = {<PlayGame/>} />
      <Route path="/start"  element = {<StartGame/>} />
      <Route path="*"  element = {<div>Not Found</div>} />
    </Routes>
    </>

  );
}

export default App;