const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        appendMessage("You", userMessage);
        userInput.value = "";
        queryChatGPT(userMessage);
    }
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function queryChatGPT(userMessage) {
    // Send userMessage to ChatGPT (you'll need to implement this part)
    // For now, let's just simulate a response from ChatGPT
    const botResponse = "This is a sample response from ChatGPT.";
    appendMessage("ChatGPT", botResponse);
}