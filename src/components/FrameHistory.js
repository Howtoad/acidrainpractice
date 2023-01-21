const FrameHistory = () => {
  const pclass = "text-white border-b pl-2";
  return (
    <div className="flex text-xl pl-2 mt-10">
      <div className="border-r">
        <h3 className="text-white pr-2 text-3xl border-b">Window</h3>
        <p className={pclass}>Infinity</p>
        <p className={pclass}>1-14</p>
        <p className={pclass}>24-26</p>
        <p className={pclass}>34-35</p>
      </div>
      <div className="">
        <h3 className="text-white pl-2 text-3xl border-b">Input</h3>
        <div className="max-h-[116px] scrollbar-thin scrollbar-thumb-gray-800">
          <p className={pclass}>K: 55</p>
          <p className={pclass}>J: 8 </p>
          <p className={pclass}>J: 25 </p>
          <p className={pclass}>J: 34 </p>
          <p className={pclass}>K: 34</p>
          <p className={pclass}>J: 10 </p>
          <p className={pclass}>J: 24 </p>
          <p className={pclass}>J: 35 </p>
        </div>
      </div>
    </div>
  );
};

export default FrameHistory;
