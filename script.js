const inputSequence = [
  [sessionStorage.getItem(key2.value), 0, Infinity],
  [sessionStorage.getItem(key2.value), 16.66, 233.24],
  [sessionStorage.getItem(key2.value), 399.84, 499.82],
  [sessionStorage.getItem(key2.value), 566.44, 599.76],
];

let currentIndex = 0;
let startTime = null;

document.addEventListener("keypress", (event) => {
  // If this is the first key in the sequence, record the start time
  if (currentIndex === 0) {
    startTime = Date.now();
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
    currentIndex++;

    // If we've reached the end of the sequence, print 'true' to the console
    if (currentIndex === inputSequence.length) {
      console.log("POGGGG, you're good at this game");
      console.log("true");
      currentIndex = 0;
    }
  } else {
    console.log("You fucking suck");
    currentIndex = 0;
    startTime = null;
  }
});
