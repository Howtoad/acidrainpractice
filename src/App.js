import "./App.css";
import OneInputSelect from "./components/OneInputSelect";
import ThreeInputSelect from "./components/ThreeInputSelect";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-700 w-screen h-screen">
        <h1 className="text-center text-white font-bold text-3xl pt-5">
          Choose your inputs
        </h1>
        <OneInputSelect></OneInputSelect>
        <ThreeInputSelect></ThreeInputSelect>
      </div>
    </div>
  );
}

export default App;
