import React from "react";
import Recorder from "./Recorder";

const InputSelect = ({
  keyState,
  keySetter,
  number,
  altNumber,
  existingKeys,
  listening,
}) => {
  return (
    <div data-testid="input-select" className="flex mb-5 pl-2">
      <Recorder
        keySetter={keySetter}
        keyState={keyState}
        number={number}
        existingKeys={existingKeys}
        listening={listening}
      />
      <p className="text-white text-2xl mr-2 pl-2">Record input for</p>
      <img src={number} alt={altNumber} className="max-w-[40px]"></img>
      <p className="text-white text-2xl font-bold pl-2 pr-2 capitalize w-[40px]">
        {keyState}
      </p>
    </div>
  );
};

export default InputSelect;
