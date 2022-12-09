function listenForFirstKey() {
  console.log("Select input for '1'");
  // Listen for the next keypress event
  const listener = (event) => {
    // Save the key to session storage
    sessionStorage.setItem("key1", event.key);

    // Remove the event listener so we don't keep listening
    document.removeEventListener("keypress", listener);
    console.log("Key selected for '1' is: " + event.key);
  };
  document.addEventListener("keypress", listener);
}
