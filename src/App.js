import "./App.css";
import React from "react";

function App() {
  function KeyboardInputPrompt() {
    const [input1, setInput1] = React.useState(null);
    const [input2, setInput2] = React.useState(null);

    function handleKeyDown(event) {
      if (!input1) {
        setInput1(event.key);
        return;
      }

      if (!input2 && event.key !== input1) {
        setInput2(event.key);
      }
    }

    React.useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    React.useEffect(() => {
      if (input1 && input2) {
        sessionStorage.setItem("input1", input1);
        sessionStorage.setItem("input2", input2);
      }
    }, [input1, input2]);
  }
  return (
    <div className="App">
      <div className="w-full bg-slate-700 h-screen">
        <div
          className="max-w-[300px] mx-auto pt-10"
          onClick={KeyboardInputPrompt}
        >
          <h1 className="text-3xl text-white">Choose your inputs</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
