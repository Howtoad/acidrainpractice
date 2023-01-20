import { useEffect, useState, useRef } from "react";
import "./App.css";
import CheckSequence from "./components/CheckSequence";
import IngameSound from "./components/IngameSound";
import InputSelect from "./components/InputSelect";
import ProgressBar from "./components/ProgressBar";
import ScoreTracking from "./components/ScoreTracking";
import VideoRain from "./components/VideoRain";

function App() {
  const [listening, setListening] = useState(false);

  const [key1, setKey1] = useState(null);
  const [key2, setKey2] = useState(null);
  const [barAnimation, setBarAnimation] = useState("0%");
  let streak = localStorage.getItem("streak");
  let highScore = localStorage.getItem("highScore");

  const videoRef = useRef(null);

  const [existingKeys, setExistingKeys] = useState([key1, key2]);

  useEffect(() => {
    setExistingKeys([key1, key2]);
  }, [key1, key2]);

  const frameDataMap = {
    AcidRain: [[key1], [key2, 1, 14], [key2, 24, 26], [key2, 34, 35]],
  };

  return (
    <div className="App">
      <div className="bg-gray-700 w-screen h-screen">
        <IngameSound></IngameSound>
        <h1 className="text-center text-white font-bold text-3xl pt-5">
          Choose your inputs
        </h1>
        <InputSelect
          keyState={key1}
          keySetter={setKey1}
          number={1}
          existingKeys={existingKeys}
          listening={[listening, setListening]}
        />
        <InputSelect
          keyState={key2}
          keySetter={setKey2}
          number={2}
          existingKeys={existingKeys}
          listening={[listening, setListening]}
        />
        {key1 && key2 && (
          <CheckSequence
            key1={key1}
            key2={key2}
            frameData={frameDataMap["AcidRain"]}
            setBarAnimation={setBarAnimation}
            barAnimation={barAnimation}
            streak={streak}
            highScore={highScore}
            videoRef={videoRef}
          />
        )}
        <ProgressBar
          existingKeys={existingKeys}
          listening={[listening, setListening]}
          setBarAnimation={setBarAnimation}
          barAnimation={barAnimation}
        ></ProgressBar>

        <ScoreTracking></ScoreTracking>
        <VideoRain videoRef={videoRef}></VideoRain>
      </div>
    </div>
  );
}

export default App;
