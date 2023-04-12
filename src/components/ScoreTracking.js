const ScoreTracking = () => {
  return (
    <div className="flex text-white text-2xl mt-5 pl-2">
      <div className="flex">
        <p>Streak: </p>{" "}
        <p className="mr-8 ml-2">{localStorage.getItem("streak")}</p>
      </div>
      <div className="flex">
        <p>High score: </p>{" "}
        <p className="ml-2">{localStorage.getItem("highScore")}</p>
      </div>
    </div>
  );
};

export default ScoreTracking;
