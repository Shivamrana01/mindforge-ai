
# 🧠 MindForge AI

**Think Beyond Limits.**

MindForge AI is a modern AI assistant web application designed to help users explore ideas, ask questions, and improve productivity through a clean and interactive interface.

## ✨ Features

- 🌌 Modern dark-themed interface
- 💬 Interactive chat interface
- 📱 Responsive design for desktop and mobile
- ⚡ Real-time AI responses through a backend connection
- 🔐 Secure API key handling through Cloudflare Worker Secrets
- 🎨 Custom styling and user-friendly experience

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Gemini API
- Cloudflare Workers

## 📁 Project Structure

```text
mindforge-ai/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

1. Clone or download this repository.
2. Open `index.html` in your browser to view the interface.
3. Deploy the backend using Cloudflare Workers.
4. Add your Gemini API key as a Cloudflare secret named `GEMINI_API_KEY`.
5. Configure the Worker URL in `script.js`.
6. Deploy the website using a static hosting service.

## 🔒 Security

Never publish your Gemini API key in frontend JavaScript, HTML, or GitHub. Store it securely as a Cloudflare Worker secret.

## 📌 Project Status

The frontend interface is under development. Live AI functionality requires a configured and deployed backend.

## 👨‍💻 Author

**Shivam Rana**

BCA Student | AI & Technology Enthusiast

---

*MindForge AI — Forge your ideas into reality.*
