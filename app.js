// Select elements
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
const calculateBtn = document.getElementById("calculate-btn");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calcResult = document.getElementById("calc-result");

// Hugging Face API Configuration
const apiUrl = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B";
const apiKey = "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";

// Switch sections
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    sections.forEach(section => section.classList.add("hidden"));
    document.getElementById(button.dataset.section).classList.remove("hidden");

    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Chat functionality
sendBtn.addEventListener("click", () => sendMessage());
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function addMessage(sender, text) {
  const message = document.createElement("div");
  message.textContent = `${sender}: ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage("User", userMessage);
  chatInput.value = "";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: userMessage }),
    });

    if (response.ok) {
      const data = await response.json();
      addMessage("Bot", data.generated_text || "I didn't understand that.");
    } else {
      addMessage("Bot", `Error: ${response.status}`);
    }
  } catch (error) {
    addMessage("Bot", "An error occurred.");
  }
}

// Calculator functionality
calculateBtn.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    calcResult.textContent = "Please enter valid numbers.";
  } else {
    calcResult.textContent = `Result: ${num1 + num2}`;
  }
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});