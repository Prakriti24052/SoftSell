import dotenv from "dotenv";
import express from "express";
import cors from "cors"; // <-- ADD THIS

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // <-- ALLOW frontend origin
app.use(express.json()); // <-- needed if you're using POST requests

// Debug
console.log("process.env.OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

// Routes
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// You may have a POST route like this later:
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  res.json({ reply: `You said: ${message}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
