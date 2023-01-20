import { GiMetronome } from "react-icons/gi";
import metronome from "../media/sound/metronome.mp3";
import { useState, useRef, useEffect } from "react";
const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [soundIconColor, setSoundIconColor] = useState("#8c8c8c");
  useEffect(() => {
    audioRef.current = new Audio(metronome);
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);
  const playMetronome = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      setSoundIconColor("#ffffff");
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setSoundIconColor("#8c8c8c");
    }
  };

  return (
    <div className={`cursor-pointer max-w-fit`}>
      <GiMetronome size={28} onClick={playMetronome} fill={soundIconColor} />
    </div>
  );
};

export default Metronome;
