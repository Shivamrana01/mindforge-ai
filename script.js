
const form = document.getElementById("chat-form");
const promptBox = document.getElementById("prompt");
const chat = document.getElementById("chat");
const sendButton = document.getElementById("send");

// Replace this with your deployed Cloudflare Worker URL later.
const WORKER_URL = "PASTE_YOUR_CLOUDFLARE_WORKER_URL_HERE";

function addMessage(text, role) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
  return message;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = promptBox.value.trim();
  if (!message) return;

  addMessage(message, "user");
  promptBox.value = "";
  sendButton.disabled = true;

  const reply = addMessage("Connecting to MindForge AI...", "ai");

  try {
    if (WORKER_URL.includes("PASTE_YOUR")) {
      throw new Error("Cloudflare Worker is not connected yet.");
    }

    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "The AI request failed.");
    }

    reply.textContent = data.reply || "No response received.";
  } catch (error) {
    reply.textContent =
      error.message === "Failed to fetch"
        ? "Connection failed. Check your Worker URL and CORS settings."
        : error.message;
  } finally {
    sendButton.disabled = false;
    promptBox.focus();
  }
});
