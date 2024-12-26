// api.js

// Hugging Face API Configuration
const apiUrl = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B";
const apiKey = "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";

// Fetch response from Hugging Face API
async function fetchResponse(userMessage) {
  const messageData = {
    inputs: userMessage, // Correct input for gpt-neo
    max_tokens: 500,     // Token limit
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData), // Correctly formatted payload
    });

    if (response.ok) {
      const data = await response.json();
      return data.generated_text || "Sorry, no response received."; // Get the generated text
    } else {
      return `Error: Unable to retrieve information (${response.status}).`;
    }
  } catch (error) {
    console.error("Error while fetching the response:", error);
    return "An error occurred. Please try again later.";
  }
}

// Example usage
fetchResponse("What is the capital of France?")
  .then(console.log)
  .catch(console.error);