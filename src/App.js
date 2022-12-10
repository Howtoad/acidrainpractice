import { useState } from "react";
import "./App.css";
import CheckSequence from "./components/CheckSequence";
import InputSelect from "./components/InputSelect";

function App() {
  const [key1, setKey1] = useState(null);
  const [key2, setKey2] = useState(null);

  return (
    <div className="App">
      <div className="bg-gray-700 w-screen h-screen">
        <h1 className="text-center text-white font-bold text-3xl pt-5">
          Choose your inputs
        </h1>
        <InputSelect keyState={key1} keySetter={setKey1} number={1} />
        <InputSelect keyState={key2} keySetter={setKey2} number={2} />
        {key1 && key2 && <CheckSequence key1={key1} key2={key2} />}
      </div>
    </div>
  );
}

export default App;
