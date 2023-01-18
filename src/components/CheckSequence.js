import React, { useState, useEffect, useRef } from "react";

const FRAME_LENGTH = 16.66;

const CheckSequence = ({
  frameData,
  barAnimation,
  setBarAnimation,
  streak,
  highScore,
  videoRef,
}) => {
  // Convert the time values from frames to milliseconds
  const frameDataMs = frameData.map((item) => {
    if (item.length === 1) {
      return [item[0], 0, Infinity];
    } else {
      const msA = item[1] * FRAME_LENGTH;
      // we add one because this is a range, so we want to include the last frame
      const msB = (item[2] + 1) * FRAME_LENGTH;
      return [item[0], msA, msB];
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const streakRef = useRef(0);
  useEffect(() => {
    const handleKeyPress = (event) => {
      // If this is the first key in the sequence, record the start time
      if (currentIndex === 0) {
        setStartTime(Date.now());
        setBarAnimation("100%");
        videoRef.current.currentTime = 0;
      }

      const [key, minTime, maxTime] = frameDataMs[currentIndex];

      // Calculate the time elapsed since the start of the sequence
      const elapsedTime = Date.now() - startTime;
      // If the user pressed the correct key and it's within the time range
      if (
        event.key === key &&
        elapsedTime >= minTime &&
        elapsedTime <= maxTime
      ) {
        console.log(
          `${key}, Framepress: ${Math.floor(elapsedTime / 16.66)} minFrame: ${
            minTime / 16.66
          }, maxFrame: ${maxTime / 16.66 - 1}`
        );
        videoRef.current.play();
        // If we've reached the end of the sequence, print 'true' to the console
        if (currentIndex === frameDataMs.length - 1) {
          console.log("Excellent");
          setCurrentIndex(0);
          setBarAnimation("0%");
          streakRef.current++;
          localStorage.setItem("streak", streakRef.current);
          if (streakRef.current > highScore) {
            localStorage.setItem("highScore", streakRef.current);
          }
        } else {
          // Move to the next item in the sequence
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        console.log("failFrame: " + Math.floor(elapsedTime / 16.66));
        console.log("Kamu");
        setCurrentIndex(0);
        setStartTime(null);
        setBarAnimation("0%");
        streakRef.current = 0;
        localStorage.setItem("streak", streakRef.current);
        videoRef.current.pause();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [currentIndex, frameDataMs, startTime, highScore, setBarAnimation]);

  return <div>{/* The component doesn't have any rendered content */}</div>;
};

export default CheckSequence;
