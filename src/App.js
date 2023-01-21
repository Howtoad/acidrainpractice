import { useEffect, useState, useRef } from "react";
import "./App.css";
import CheckSequence from "./components/CheckSequence";
import FatherSound from "./components/FatherSound";
import FrameHistory from "./components/FrameHistory";
import IngameSound from "./components/IngameSound";
import InputSelect from "./components/InputSelect";
import Metronome from "./components/Metronome";
import ProgressBar from "./components/ProgressBar";
import ScoreTracking from "./components/ScoreTracking";
import VideoRain from "./components/VideoRain";
import oneInput from "./media/images/one.png";
import threeInput from "./media/images/three.png";

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
        <div className="flex">
          <div className="max-w-fit">
            <div className="flex pt-2 pl-2 gap-2 mb-3">
              <IngameSound></IngameSound>
              <Metronome></Metronome>
              <FatherSound></FatherSound>
            </div>

            <InputSelect
              keyState={key1}
              keySetter={setKey1}
              number={oneInput}
              altNumber="One"
              existingKeys={existingKeys}
              listening={[listening, setListening]}
            />
            <InputSelect
              keyState={key2}
              keySetter={setKey2}
              number={threeInput}
              altNumber="Three"
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
            <ScoreTracking></ScoreTracking>
            <FrameHistory></FrameHistory>
          </div>

          <VideoRain videoRef={videoRef}></VideoRain>
        </div>
        <ProgressBar
          existingKeys={existingKeys}
          listening={[listening, setListening]}
          setBarAnimation={setBarAnimation}
          barAnimation={barAnimation}
        ></ProgressBar>
      </div>
    </div>
  );
}

export default App;
