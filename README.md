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
| OpenAI SDK      | AI-powered Chatbot (optional)    |
| Yarn            | Package Manager                  |

Total Time Spent- 8hrs

To use the OpenAI API:

1. Create `.env` in the root:
   ```env
   VITE_OPENAI_API_KEY=your-openai-key

2. Start the Node.js backend server (for the AI chat API handler):
   node server.js

3.Start the development server for the frontend
  npm run dev
