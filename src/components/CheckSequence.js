import React, { useState, useEffect } from 'react';

const FRAME_LENGTH = 16.66;

const CheckSequence = ({ inputSequence }) => {

    // Convert the time values from frames to milliseconds
    const inputSequenceMs = inputSequence.map((item) => {
        const msA = item[1] * FRAME_LENGTH;
        const msB = item[2] * FRAME_LENGTH;
        return [item[0], msA, msB];
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            // If this is the first key in the sequence, record the start time
            if (currentIndex === 0) {
                setStartTime(Date.now());
            }
            console.log(currentIndex);
            const [key, minTime, maxTime] = inputSequenceMs[currentIndex];

            // Calculate the time elapsed since the start of the sequence
            const elapsedTime = Date.now() - startTime;
            // If the user pressed the correct key and it's within the time range
            if (event.key === key && elapsedTime >= minTime && elapsedTime <= maxTime) {
                console.log(
                    `${key}, eventTime: ${elapsedTime} minTime: ${minTime}, maxTime: ${maxTime}`
                );

                // If we've reached the end of the sequence, print 'true' to the console
                if (currentIndex === (inputSequenceMs.length - 1)) {
                    console.log("Excellent");
                    setCurrentIndex(0);
                } else {
                    // Move to the next item in the sequence
                    setCurrentIndex(currentIndex + 1);
                }
            } else {
                console.log("Kamu");
                setCurrentIndex(0);
                setStartTime(null);
            }
        };

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [currentIndex, inputSequenceMs, startTime]);

    return <div>{/* The component doesn't have any rendered content */}</div>;
};

export default CheckSequence;
