import React, { useState, useEffect } from 'react';

const CheckSequence = ({ key1, key2 }) => {

    const [inputSequence] = useState([
        [key1, 0, Infinity],
        [key2, 16.66, 233.24],
        [key2, 399.84, 499.82],
        [key2, 566.44, 599.76],
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            // If this is the first key in the sequence, record the start time
            if (currentIndex === 0) {
                setStartTime(Date.now());
            }
            const [key, minTime, maxTime] = inputSequence[currentIndex];

            // Calculate the time elapsed since the start of the sequence
            const elapsedTime = Date.now() - startTime;
            // If the user pressed the correct key and it's within the time range
            if (event.key === key && elapsedTime >= minTime && elapsedTime <= maxTime) {
                console.log(
                    `${key}, eventTime: ${elapsedTime} minTime: ${minTime}, maxTime: ${maxTime}`
                );
                // Move to the next item in the sequence
                setCurrentIndex(currentIndex + 1);

                // If we've reached the end of the sequence, print 'true' to the console
                if (currentIndex === inputSequence.length) {
                    console.log("Excellent");
                    setCurrentIndex(0);
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
    }, [currentIndex, inputSequence, startTime]);

    return <div>{/* The component doesn't have any rendered content */}</div>;
};

export default CheckSequence;
