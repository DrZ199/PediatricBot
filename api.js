// api.js

// Hugging Face API Configuration
const apiUrl = "https://api-inference.huggingface.co/models/Qwen/QwQ-32B-Preview/v1/chat/completions";
const apiKey = "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";

// Fetch response from Qwen API
async function fetchQwenResponse(userMessage) {
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
      return data.choices?.[0]?.message?.content || "Sorry, no response received.";
    } else {
      return `Error: Unable to retrieve information (${response.status}).`;
    }
  } catch (error) {
    console.error("An error occurred while fetching the API:", error);
    return "An error occurred. Please try again later.";
  }
}

// Usage Example
// fetchQwenResponse("What is the capital of France?").then(console.log);