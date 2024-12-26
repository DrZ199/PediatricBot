// api.js

// Hugging Face API Configuration
const apiUrl = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B";
const apiKey = "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";

// Fetch response from Hugging Face API
async function fetchResponse(userMessage) {
  const messageData = {
    inputs: userMessage, // Correct input field for gpt-neo models
    max_tokens: 500,
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
      return data.generated_text || "Sorry, no response received."; // Access the generated text
    } else {
      return `Error: Unable to retrieve information (${response.status}).`;
    }
  } catch (error) {
    console.error("An error occurred while fetching the API:", error);
    return "An error occurred. Please try again later.";
  }
}

// Usage Example
// fetchResponse("What is the capital of France?").then(console.log);