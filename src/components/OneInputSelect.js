import RecorderOne from "./RecorderOne";
import { useState } from "react";


const ListenForFirstKey = () => {
    console.log("Select input for '1'");
  
    // Use the useState hook to create a state variable and a function to update it
    const [key1, setKey1] = useState(null);
  
    const handleKeyPress = (event) => {
      // Save the key to the state variable
      setKey1(event.key);
  
      // Remove the event listener so we don't keep listening
      document.removeEventListener("keypress", handleKeyPress);
      console.log("Key selected for '1' is: " + event.key);
    };
  
    // Add an event listener for the "keypress" event
    document.addEventListener("keypress", handleKeyPress);
  
    return null;
  };

const OneInputSelect = () => {
  return (
    <div className="flex mb-5">
      <p className="text-white text-2xl">Input Chosen for "1": </p>
      <p className="text-white text-2xl font-bold pl-2 pr-2 capitalize">K</p>
      <RecorderOne onClick={ListenForFirstKey}></RecorderOne>
    </div>
  );
};

export default OneInputSelect;
