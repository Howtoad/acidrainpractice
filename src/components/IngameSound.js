import { AiFillSound } from "react-icons/ai";
import ingameSound from "../media/sound/acid_sound.mp3";
import { useState, useRef, useEffect } from "react";

const IngameSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [soundIconColor, setSoundIconColor] = useState("#8c8c8c");
  useEffect(() => {
    audioRef.current = new Audio(ingameSound);
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);
  const playIngameSound = () => {
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
      <AiFillSound size={28} onClick={playIngameSound} fill={soundIconColor} />
    </div>
  );
};

export default IngameSound;
