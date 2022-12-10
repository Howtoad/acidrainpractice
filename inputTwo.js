let key1 = sessionStorage.getItem("key1");

function listenForSecondKey() {
  console.log("Select input for '3'");
  // Listen for the next keypress event
  const listener = (event) => {
    // Save the key to session storage
    sessionStorage.setItem("key2", event.key);

    // Remove the event listener so we don't keep listening
    document.removeEventListener("keypress", listener);
    console.log("Key selected for '3' is: " + event.key);

    // Call the checkSequence function to begin the game
    if (sessionStorage.getItem(key1) && sessionStorage.getItem(key2)) {
      checkSequence();
      const key2Value = sessionStorage.getItem(key2);
      const inputFor3Element = document.getElementById("inputFor3");
      inputFor3Element.innerText = key2Value;
    }
  };
  document.addEventListener("keypress", listener);
}
