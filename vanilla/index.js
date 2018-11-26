// import axios from "axios";
console.log("This is a script to get messages");

// Need to differentiate between user messages (float right) and Watson response (float left)
const displayMessage = (message, isUser) => {
  // Get container element for conversation messages
  let messages = document.getElementById("messages");

  // Create a new message and add it to DOM
  const newContainer = document.createElement("section");
  const newMessage = document.createElement("article");
  newMessage.className = "message";
  newContainer.className = "messageContainer";

  isUser
    ? newMessage.classList.add("user")
    : newMessage.classList.add("watson");

  newMessage.innerText = message;
  newContainer.append(newMessage);
  messages.childNodes[3].append(newContainer);
};

const message = "This is a test message from Watson";
displayMessage(message);
