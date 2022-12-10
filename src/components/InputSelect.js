import Recorder from "./Recorder";

const InputSelect = ({
  keyState,
  keySetter,
  number,
  existingKeys,
  listening
}) => {
  return (
    <div className="flex mb-5">
      <p className="text-white text-2xl">Input Chosen for "{number}": </p>
      <p className="text-white text-2xl font-bold pl-2 pr-2 capitalize w-[40px]">
        {keyState}
      </p>
      <Recorder
        keySetter={keySetter}
        number={number}
        existingKeys={existingKeys}
        listening={listening}
      />
    </div>
  );
};

export default InputSelect;
