import { GiChessKing } from "react-icons/gi";
import father from "../media/sound/father.mp3";
import { useState, useRef, useEffect } from "react";
const FatherSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [soundIconColor, setSoundIconColor] = useState("#8c8c8c");
  useEffect(() => {
    audioRef.current = new Audio(father);
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);
  const playFather = () => {
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
    <div className={`cursor-pointer text-[${soundIconColor}]`}>
      <GiChessKing size={28} onClick={playFather} />
    </div>
  );
};

export default FatherSound;
