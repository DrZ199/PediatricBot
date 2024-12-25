// Elements
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Hugging Face API Configuration
const apiUrl = "https://api-inference.huggingface.co/models/Qwen/QwQ-32B-Preview/v1/chat/completions";
const apiKey = "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";

// Event Listeners
sendBtn.addEventListener("click", () => sendMessage());
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
darkModeToggle.addEventListener("click", toggleDarkMode);

// Add a message to the chat
function addMessage(sender, text) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fetch a response from the Hugging Face API
async function fetchBotResponse(userMessage) {
  addMessage("bot", "Typing...");

  const messageData = {
    model: "Qwen/QwQ-32B-Preview",
    messages: [
      {
        role: "user",
        content: userMessage,
      },
    ],
    max_tokens: 500,
    stream: false, // Set to true if streaming is required
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    if (response.ok) {
      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
      updateLastMessage(botReply);
    } else {
      updateLastMessage(`Error: Unable to retrieve information (${response.status}).`);
    }
  } catch (error) {
    updateLastMessage("An error occurred. Please try again later.");
    console.error("Error fetching response:", error);
  }
}

// Handle sending a message
function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage("user", userMessage);
  chatInput.value = "";
  fetchBotResponse(userMessage);
}

// Update the last bot message
function updateLastMessage(text) {
  const lastBotMessage = [...chatBox.getElementsByClassName("message bot")].pop();
  if (lastBotMessage) lastBotMessage.textContent = text;
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}