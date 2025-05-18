# SoftSell
A modern and responsive landing page for **SoftSell** — a marketing	website	

**Live Demo**: [Visit SoftSell on Vercel](https://soft-sell-eight-alpha.vercel.app)


## 🚀 Features Implemented

### 🧩 Core Pages & Components

- **Hero Section**: Engaging entry point with call-to-action buttons
- **Why Choose Us**: Clear value proposition using icons and grid layout
- **How It Works**: Step-by-step walkthrough for users
- **Testimonials**: Real-world feedback from IT professionals
- **Contact Form**: Email submission form (UI only)

### 🌗 Dark/Light Mode

- Toggle implemented using Tailwind's `dark:` variants
- Responsive to system preference and manual toggle

### 🎨 Design & Responsiveness

- Built using **Tailwind CSS** for utility-first styling
- Fully responsive layout (mobile-first)
  
### 🧠 Bonus: AI-Powered Chat (LLM Integration)

- Integrated basic chatbot powered by OpenAI's GPT (free-tier key)
- Uses `openai` npm package and client-side API key (demo use only)

## ✨ Design Choices

- **Framework**: React (Vite) for fast development and bundling
- **Styling**: Tailwind CSS for scalable and modern UI

## 🛠 Technologies Used

| Technology      | Purpose                          |
|-----------------|----------------------------------|
| React + Vite    | Frontend Framework               |
| Tailwind CSS    | Styling & Theming                |
| Framer Motion   | Section Animations               |
| OpenAI SDK      | AI-powered Chatbot               |
| Yarn            | Package Manager                  |

Total Time Spent- 8hrs

## 🛠️ Getting Started

Follow these steps to run the project locally and enable OpenAI-powered features.

---

### 1️⃣ Clone the Repository
bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies
bash
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the root of the project and add your OpenAI API key
env
VITE_OPENAI_API_KEY=your-openai-key

4️⃣ Start the Backend Server
This server handles API requests to OpenAI
bash
node server.js

5️⃣ Start the Frontend Development Server
Use Vite’s dev server:
bash
npm run dev

