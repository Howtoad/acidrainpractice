import React from "react";

const Recorder = ({
  keySetter,
  keyState,
  number,
  existingKeys,
  listening
}) => {
  const handleClick = () => {

    let [isListening, setListening] = listening;

    if (isListening) {
      console.log("Already listening for a keypress!")
      return;
    }

    setListening(true);

    console.log(`Select input for '${number}'`);

    // Add an event listener for the "keypress" event
    const listener = (event) => {
      if (existingKeys.includes(event.key) && event.key !== keyState) {
        console.log("This key is already in use!")
        return;
      }

      console.log(`Key selected for '${number}' is: ` + event.key);

      // Save the key to the state variable
      keySetter(event.key);

      // Remove the event listener so we don't keep listening
      document.removeEventListener("keypress", listener);

      setListening(false);
    };

    document.addEventListener("keypress", listener);
  };

  // Use the useState hook to create a state variable and a function to update it
  return (
    <div
      data-testid="recorder"
      className="rounded-full w-8 h-8 bg-red-600 cursor-pointer self-center"
      onClick={handleClick}
    />
  );
};

export default Recorder;
