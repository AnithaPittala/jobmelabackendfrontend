// Open chatbox when chat button is clicked
document.getElementById("open-chatbox").addEventListener("click", function () {
    document.getElementById("chatbox-popup").style.display = "flex";
    loadMessages(); // Load messages from localStorage when chatbox is opened
    scrollToBottom(); // Ensure the chatbox scrolls to the bottom
  });
  
  // Close chatbox
  document.getElementById("close-chatbox").addEventListener("click", function () {
    document.getElementById("chatbox-popup").style.display = "none";
  });
  
  // Function to create a new message element
  function createMessage(content, sender = "You") {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
  
    const senderSpan = document.createElement("span");
    senderSpan.classList.add("sender");
    senderSpan.innerText = sender;
  
    const textSpan = document.createElement("span");
    textSpan.classList.add("text");
    textSpan.innerText = content;
  
    messageDiv.appendChild(senderSpan);
    messageDiv.appendChild(textSpan);
  
    return messageDiv;
  }
  
  // Function to append a message to the chatbox
  function appendMessage(message) {
    const chatboxContent = document.getElementById("chatbox-content");
    chatboxContent.appendChild(message);
    scrollToBottom();
  }
  
  // Function to scroll to the bottom of the chatbox
  function scrollToBottom() {
    const chatboxContent = document.getElementById("chatbox-content");
    chatboxContent.scrollTop = chatboxContent.scrollHeight;
  }
  
  // Send a message when the Send button is clicked
  document.getElementById("send-button").addEventListener("click", function () {
    const userMessage = document.getElementById("user-message").value;
  
    if (userMessage.trim()) {
      // Create and append the user's message
      const userMessageElement = createMessage(userMessage, "You");
      appendMessage(userMessageElement);
  
      // Store the message in localStorage
      saveMessageToLocalStorage(userMessage, "You");
  
      // Clear the input field
      document.getElementById("user-message").value = "";
  
      // Simulate an auto-reply after the user sends a message
      autoReply();
    }
  });
  
  // Function to save messages to localStorage
  function saveMessageToLocalStorage(message, sender) {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    storedMessages.push({ message, sender });
    localStorage.setItem("messages", JSON.stringify(storedMessages));
  }
  
  // Function to load stored messages from localStorage
  function loadMessages() {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    storedMessages.forEach(msg => {
      const messageElement = createMessage(msg.message, msg.sender);
      appendMessage(messageElement);
    });
  }
  
  // Function for auto-reply after a delay
  function autoReply() {
    setTimeout(() => {
      const replyMessage = "How can I assist you?";
      const replyElement = createMessage(replyMessage, "System");
      appendMessage(replyElement);
  
      // Store the auto-reply in localStorage
      saveMessageToLocalStorage(replyMessage, "System");
  
      scrollToBottom();
    }, 1000); // Simulate a 1-second delay
  }
  