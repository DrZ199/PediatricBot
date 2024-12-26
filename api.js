const apiUrl = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B";
const apiKey = "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";

async function fetchQwenResponse(userMessage) {
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
      return data.generated_text || "Sorry, I couldn't process that.";
    } else {
      return `Error: Unable to retrieve information (${response.status}).`;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return "An error occurred. Please try again later.";
  }
}