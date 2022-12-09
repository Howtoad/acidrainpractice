function listenForSecondKey() {
  console.log("Select input for '3'");
  // Listen for the next keypress event
  const listener = (event) => {
    // Save the key to session storage
    sessionStorage.setItem("key2", event.key);

    // Remove the event listener so we don't keep listening
    document.removeEventListener("keypress", listener);
    console.log("Key selected for '3' is: " + event.key);
  };
  document.addEventListener("keypress", listener);
}
