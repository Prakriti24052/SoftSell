import React, { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Show user message
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    const userInput = input;
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      if (data && data.reply) {
        setMessages((msgs) => [...msgs, { from: "ai", text: data.reply }]);
      } else {
        setMessages((msgs) => [...msgs, { from: "ai", text: "No reply from server." }]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((msgs) => [...msgs, { from: "ai", text: "Error: Could not fetch reply." }]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "#007aff",
            border: "none",
            color: "white",
            fontSize: 30,
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
          }}
          aria-label="Open chat"
          title="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            width: 350,
            maxHeight: 450,
            backgroundColor: "white",
            borderRadius: 15,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#007aff",
              color: "white",
              padding: "10px 15px",
              fontWeight: "600",
              fontSize: 18,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Chat with AI</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: 22,
                cursor: "pointer",
                lineHeight: 1,
              }}
              aria-label="Close chat"
              title="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flexGrow: 1,
              padding: "10px 15px",
              overflowY: "auto",
              backgroundColor: "#f9f9f9",
              fontSize: 14,
            }}
          >
            {messages.length === 0 && (
              <p style={{ color: "#999", textAlign: "center", marginTop: 30 }}>
                Start the conversation!
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 12,
                  display: "flex",
                  justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "70%",
                    backgroundColor: msg.from === "user" ? "#007aff" : "#e5e5ea",
                    color: msg.from === "user" ? "white" : "black",
                    padding: "8px 12px",
                    borderRadius: 15,
                    borderTopRightRadius: msg.from === "user" ? 0 : 15,
                    borderTopLeftRadius: msg.from === "user" ? 15 : 0,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div
            style={{
              padding: 10,
              borderTop: "1px solid #ddd",
              display: "flex",
              gap: 10,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              style={{
                flexGrow: 1,
                borderRadius: 20,
                border: "1px solid #ccc",
                padding: "8px 15px",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                backgroundColor: "#007aff",
                border: "none",
                color: "white",
                borderRadius: 20,
                padding: "8px 20px",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: 14,
                boxShadow: "0 2px 8px rgba(0,122,255,0.5)",
                transition: "background-color 0.3s ease",
              }}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
