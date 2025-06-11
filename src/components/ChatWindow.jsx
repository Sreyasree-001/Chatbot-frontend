import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdOutlineDelete, MdHistory } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const suggestions = [
  "cheap electronics",
  "premium furniture",
  "show me air fryers",
  "between 20 and 100",
];

const formatTimestamp = (isoString) => {
  return new Date(isoString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const ChatWindow = ({ setProductResults, setQueryMessage }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [historyMessages, setHistoryMessages] = useState([]);

  const welcomeText = [
    {
      type: "bot",
      text: `Welcome 🌟 ${username}! Need recommendations? Try these:`,
      timestamp: new Date().toISOString(),
    },
    {
      type: "bot",
      text: `Example: ${suggestions.join(" / ")}`,
      timestamp: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-messages", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const chatHistory = res.data.flatMap((msg) => [
          {
            type: "user",
            text: msg.user_message,
            timestamp: msg.timestamp,
          },
          {
            type: "bot",
            text: msg.bot_message,
            timestamp: msg.timestamp,
          },
        ]);

        setHistoryMessages(chatHistory); // Only store in history
        setMessages(welcomeText); // Don't show in main chat
      } catch (error) {
        console.error("Failed to fetch chat history:", error);
        setMessages(welcomeText);
      }
    };

    fetchChatHistory();
  }, []);

  const sendQuery = async () => {
    if (!query.trim()) return;

    const userMessage = {
      type: "user",
      text: query,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/search-products?q=${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const products = res.data;
      setProductResults(products);
      setQueryMessage(query);
      const timestamp = new Date().toISOString();

      if (products.length === 0) {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "No products found!", timestamp },
        ]);
      } else {
        const productMessages = products.map((p) => ({
          type: "bot",
          text: `${p.name} - ₹${p.price} [${p.category}]`,
          timestamp,
        }));

        setMessages((prev) => [
          ...prev,
          { type: "bot", text: `Found ${products.length} product(s):`, timestamp },
          ...productMessages,
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Error fetching products.",
          timestamp: new Date().toISOString(),
        },
      ]);
    }

    setQuery("");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the chat?")) {
      setMessages(welcomeText);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-auto rounded-lg shadow-lg border border-gray-300 bg-white roboto-mono-new">
      {/* Chat History Drawer */}
      {drawerOpen && (
        <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg border-r z-50 overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Chat History</h2>
            <button onClick={() => setDrawerOpen(false)}>
              <IoMdClose size={20} />
            </button>
          </div>
          <div className="p-4 space-y-3 text-sm">
            {historyMessages.map((msg, idx) => (
              <div key={idx} className="border-b pb-2">
                <p
                  className={`font-medium ${
                    msg.type === "user" ? "text-green-700" : "text-blue-700"
                  }`}
                >
                  [{formatTimestamp(msg.timestamp)}]{" "}
                  {msg.type === "user" ? "You" : "Bot"}:
                </p>
                <p className="text-gray-700">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b bg-gray-100 rounded-t-lg">
        <h2 className="text-md font-bold">Chat with Quebot</h2>
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm"
        >
          <MdHistory />
          History
        </button>
      </div>

      {/* Chat Area */}
      <div className="h-72 overflow-y-auto space-y-2 p-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 rounded-xl text-sm max-w-[80%] break-words ${
              msg.type === "bot"
                ? "bg-blue-100 text-left text-gray-800"
                : "bg-green-100 text-right text-gray-900 ml-auto"
            }`}
          >
            <div>{msg.text}</div>
            <div className="text-xs text-gray-500 mt-1">
              {formatTimestamp(msg.timestamp)}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2 p-3 bg-white border-t rounded-b-lg">
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Type your query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendQuery()}
        />
        <button
          onClick={sendQuery}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded"
        >
          Send
        </button>
        <button
          onClick={handleReset}
          className="cursor-pointer bg-gray-500 hover:bg-red-600 text-white px-3 py-2 rounded-full flex items-center justify-center"
        >
          <MdOutlineDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
