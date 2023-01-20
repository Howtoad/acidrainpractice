import { AiFillSound } from "react-icons/ai";
import ingameSound from "../media/sound/acid_sound.mp3";
import { useState, useRef, useEffect } from "react";

const IngameSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
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
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="cursor-pointer max-w-fit text-white">
      <AiFillSound size={28} onClick={playIngameSound} />
    </div>
  );
};

export default IngameSound;
