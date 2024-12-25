NelsonBot

NelsonBot is a Progressive Web App (PWA) chatbot designed as a pediatric knowledge assistant. It provides accurate, evidence-based information sourced exclusively from the Nelson Textbook of Pediatrics. Built with modern web technologies and leveraging the Hugging Face Zephyr AI model, NelsonBot is mobile-first, lightweight, and user-friendly.

Features
	•	🤖 AI-powered responses: Queries are handled using the Hugging Face Zephyr-7B-Alpha model.
	•	🌐 Progressive Web App: Installable, offline-capable, and responsive.
	•	🌙 Dark mode toggle: Enhances usability in low-light environments.
	•	💬 Simple UI: Clean and intuitive chat interface with rounded corners and responsive design.
	•	🚀 Fast and lightweight: Optimized for performance.

File Structure

nelsonbot/
├── index.html            # Main entry point for the chatbot
├── app.js                # Core JavaScript logic for the chatbot
├── styles.css            # Custom styles for the chatbot UI
├── manifest.json         # Progressive Web App manifest
├── service-worker.js     # Service worker for offline capabilities
└── assets/               # Folder for assets (icons and images)
    └── icons/
        ├── icon-192x192.png  # PWA icon (192x192)
        └── icon-512x512.png  # PWA icon (512x512)

Getting Started

1. Clone the Repository

git clone <repository_url>
cd nelsonbot

2. Open the Project

No additional setup is required. Simply open the index.html file in your browser.

3. (Optional) Host the Project

To enable full PWA functionality, including offline capabilities, host the project on any web server (e.g., Netlify, Vercel, GitHub Pages).

Technologies Used
	•	HTML5: Structure and semantics.
	•	CSS3: Styling and layout.
	•	JavaScript: Logic and API integration.
	•	Bootstrap 5: Responsive design (optional).
	•	Hugging Face API: For natural language processing.

How It Works
	1.	Users type a question in the input box.
	2.	The chatbot sends the question to the Hugging Face Zephyr-7B-Alpha API.
	3.	The bot retrieves and displays an evidence-based response from the Nelson Textbook of Pediatrics dataset.

Customizing
	•	Change the model: Update the apiUrl in app.js to use a different Hugging Face model.
	•	Customize styles: Edit styles.css to change colors, fonts, and layout.
	•	Modify icons: Replace the images in the assets/icons folder to use custom branding.

Dark Mode

Enable or disable dark mode with a toggle button in the navbar.

Progressive Web App (PWA)

NelsonBot is fully PWA-ready:
	•	Installable: Add to your home screen on mobile.
	•	Offline-ready: Works offline using a service worker.

Credits
	•	Hugging Face for the Zephyr-7B-Alpha model.
	•	Nelson Textbook of Pediatrics for authoritative pediatric information.
	•	Icons: Material design icons.

License

This project is licensed under the MIT License. See LICENSE for more details.

Let me know if you need more customization!