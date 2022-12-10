import React, { useState } from "react";

const RecorderThree = ({ setKey2 }) => {
  const handleClick = () => {
    console.log("Select input for '3'");
    // Add an event listener for the "keypress" event
    const listener = (event) => {
      console.log("Key selected for '3' is: " + event.key);

      // Save the key to the state variable
      setKey2(event.key);

      // Remove the event listener so we don't keep listening
      document.removeEventListener("keypress", listener);
    };
    document.addEventListener("keypress", listener);
  };

  // Use the useState hook to create a state variable and a function to update it

  return (
    <div
      className="rounded-full w-8 h-8 bg-red-600 cursor-pointer self-center"
      onClick={handleClick}
    ></div>
  );
};

export default RecorderThree;
