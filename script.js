document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Add user's message
    addMessage(userInput, "user");

    // Generate bot response
    const botResponse = getBotResponse(userInput);

    // Add bot's message after a short delay
    setTimeout(() => addMessage(botResponse, "bot"), 500);

    // Clear the input
    document.getElementById("user-input").value = "";
}

function addMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(input) {
    // Simple predefined responses
    const responses = {
        hello: "Hi there! How can I help you?",
        hi: "Hello! What do you need assistance with?",
        help: "Sure, let me know what you need help with.",
        bye: "Goodbye! Have a great day!",
    };

    // Match user input to response
    const response = responses[input.toLowerCase()];
    return response || "I'm not sure how to respond to that.";
}
