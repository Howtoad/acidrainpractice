import RecorderThree from "./RecorderThree";
import { useState } from "react";

const ThreeInputSelect = () => {
  const [key2, setKey2] = useState(null);
  return (
    <div className="flex mb-5">
      <p className="text-white text-2xl">Input Chosen for "1": </p>
      <p className="text-white text-2xl font-bold pl-2 pr-2 capitalize w-[40px]">
        {key2}
      </p>
      <RecorderThree setKey2={setKey2}></RecorderThree>
    </div>
  );
};

export default ThreeInputSelect;
