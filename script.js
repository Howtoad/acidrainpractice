const inputSequence = [
    ['q', 0, Infinity],
    ['w', 16.66, 233.24],
    ['w', 399.84, 433.16],
    ['w', 566.44, 600]
];

let currentIndex = 0;
let startTime = null;

document.addEventListener('keypress', (event) => {
    // If this is the first key in the sequence, record the start time
    if (currentIndex === 0) {
        startTime = Date.now();
    }
    const [key, minTime, maxTime] = inputSequence[currentIndex];

    // Calculate the time elapsed since the start of the sequence
    const elapsedTime = Date.now() - startTime;

    // If the user pressed the correct key and it's within the time range
    if (event.key === key && elapsedTime >= minTime && elapsedTime <= maxTime) {
        console.log(`${key}, eventTime: ${elapsedTime} minTime: ${minTime}, maxTime: ${maxTime}`)
        // Move to the next item in the sequence
        currentIndex++;

        // If we've reached the end of the sequence, print 'true' to the console
        if (currentIndex === inputSequence.length) {
            console.log("POGGGG, you're good at this game")
            console.log('true');
        }
    } else {
        console.log("You fucking suck")
        currentIndex = 0;
        startTime = null;
    }
});
