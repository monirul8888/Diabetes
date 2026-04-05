import { useState } from "react";

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 I am your AI Health Assistant. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Chatbot toggle state

  const WEBHOOK_URL = "https://monirul.app.n8n.cloud/webhook/4acd0199-3a99-4c1b-b0d9-9705d624caae";

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { sender: "bot", text: data.reply || "Sorry, I couldn't understand." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-l-lg z-50 shadow-lg"
        >
          Chat
        </button>
      )}

      {/* Chatbot panel */}
      {isOpen && (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-96 h-[600px] bg-white shadow-xl rounded-l-2xl flex flex-col z-50">
          {/* Header with close button */}
          <div className="bg-blue-600 text-white p-4 rounded-tr-2xl font-semibold text-lg flex justify-between items-center">
            AI Health Assistant
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg hover:text-gray-200 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-lg max-w-[85%] bg-gray-200 text-gray-800">
                Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              type="text"
              className="flex-1 p-3 outline-none text-sm"
              placeholder="Ask health question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-5 font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}