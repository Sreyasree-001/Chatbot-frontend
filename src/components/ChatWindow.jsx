// import axios from "axios";
// import React, { useState } from "react";
// import { MdOutlineDelete } from "react-icons/md";

// const suggestions = [
//   "cheap electronics",
//   "premium furniture",
//   "show me air fryers",
//   "between 20 and 100",
// ];


// const ChatWindow = ({ setProductResults, setQueryMessage }) => {

//   const token = localStorage.getItem("token")
//   const username = localStorage.getItem("username");
//   const [query, setQuery] = useState("");
//   const welcomeText = [
//   {
//       type: "bot",
//       text: `Welcome 🌟 ${username} ! Need recommendations? Try these:`,
//     },
//     { type: "bot", text: `Example: ${suggestions.join("/")}` },
// ]
//   const [messages, setMessages] = useState(welcomeText);

//   const sendQuery = async () => {
//     if (!query.trim()) return;
//     setMessages((prev) => [...prev, { type: "user", text: query }]);
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/search-products?q=${query}`,
//         {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
//       );
//       const products = res.data;
//       setProductResults(products); //to display in the products section
//       setQueryMessage(query);

//       if (products.length === 0) {
//         setMessages((prev) => [
//           ...prev,
//           { type: "bot", text: "No products found!" },
//         ]);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { type: "bot", text: `Found ${products.length} products:` },
//           ...products.map((p) => ({
//             type: "bot",
//             text: `${p.name} - ₹${p.price} [${p.category}]`,
//           })),
//         ]);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { type: "bot", text: "Error fetching products." },
//       ]);
//     }
//     setQuery("");
//   };

//   const handleReset = () => {
//     if (window.confirm("Are you sure you want to reset the chat?")) {
//       setMessages(welcomeText);
//     }
//   };

//   return (
//     <div className="mb-4 flex w-full h-full overflow-y-scroll overflow-x-hidden">
//       <div className="bg-white p-4 rounded-xl shadow-xl max-w-2xl mx-auto">
//         <div className="h-96 overflow-y-auto mb-4 space-y-2 border p-3 rounded bg-gray-50">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`p-2 rounded-xl max-w-[80%] ${
//                 msg.type === "bot"
//                   ? "bg-blue-100 text-left"
//                   : "bg-green-100 text-right ml-auto"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-2">
//           <input
//             className="border p-2 rounded flex-1"
//             placeholder="Type your query..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendQuery()}
//           />
//           <button
//             onClick={sendQuery}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Send
//           </button>
//           <button
//           onClick={handleReset}
//           className="px-4 py-0 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md"
//         >
//           <MdOutlineDelete />
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
import axios from "axios";
import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const suggestions = [
  "cheap electronics",
  "premium furniture",
  "show me air fryers",
  "between 20 and 100",
];

const ChatWindow = ({ setProductResults, setQueryMessage }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [query, setQuery] = useState("");
  const welcomeText = [
    {
      type: "bot",
      text: `Welcome 🌟 ${username} ! Need recommendations? Try these:`,
    },
    { type: "bot", text: `Example: ${suggestions.join(" / ")}` },
  ];
  const [messages, setMessages] = useState(welcomeText);

  const sendQuery = async () => {
    if (!query.trim()) return;
    setMessages((prev) => [...prev, { type: "user", text: query }]);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/search-products?q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const products = res.data;
      setProductResults(products);
      setQueryMessage(query);

      if (products.length === 0) {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "No products found!" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: `Found ${products.length} products:` },
          ...products.map((p) => ({
            type: "bot",
            text: `${p.name} - ₹${p.price} [${p.category}]`,
          })),
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error fetching products." },
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
    <div className="flex flex-col w-full h-auto rounded-lg shadow-lg shadow-gray-500 border-1 border-gray-500 bg-white roboto-mono-new">
      {/* Chat Area */}
      <div className="h-72 overflow-y-auto space-y-2 p-4 bg-gray-50 rounded-t-lg border-b">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 rounded-xl text-sm max-w-[80%] break-words ${
              msg.type === "bot"
                ? "bg-blue-100 text-left text-gray-800"
                : "bg-green-100 text-right text-gray-900 ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2 p-3 bg-white rounded-b-lg border-t">
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Type your query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendQuery()}
        />
        <button
          onClick={sendQuery}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Send
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full flex items-center justify-center"
        >
          <MdOutlineDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
