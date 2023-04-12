import { useEffect, useRef } from "react";
const FrameHistory = ({ inputHistory }) => {
  const historyContainerRef = useRef(null);
  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop =
        historyContainerRef.current.scrollHeight;
    }
  }, [inputHistory]);

  const pclass = "text-white border-b pl-2";
  const successStyle = "text-green-400";
  const failStyle = "text-red-400";
  return (
    <div className="flex text-xl pl-2 mt-10">
      <div className="border-r">
        <h3 className="text-white pr-2 text-3xl border-b">Window</h3>
        <p className={pclass}>Start</p>
        <p className={pclass}>1-14</p>
        <p className={pclass}>24-26</p>
        <p className={pclass}>34-35</p>
      </div>
      <div>
        <h3 className="text-white pl-2 text-3xl border-b">Input</h3>
        <div
          ref={historyContainerRef}
          className="max-h-[116px] scrollbar-thin scrollbar-thumb-gray-800"
        >
          {inputHistory.map((input, index) => (
            <p key={index} className={pclass}>
              {input}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameHistory;
