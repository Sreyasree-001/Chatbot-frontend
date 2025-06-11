# 💬 Chatbot Frontend

A modern and responsive frontend for an AI-powered e-commerce chatbot. This React-based interface allows users to interact with the chatbot, ask product-related queries, and view dynamically rendered product cards.

🔗 [Chatbot-server Backend Repo](https://github.com/Sreyasree-001/Chatbot-server)

## ✨ Features

- 🔐 JWT-based user authentication
- 🧠 Chat interface with smart suggestions
- 📦 Displays product data from MongoDB backend
- 🎨 Styled with Tailwind CSS for a clean UI
- 🔄 Dynamic rendering with loading states

## 🛠️ Tech Stack

- **Framework:** React.js (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** JWT (stored in `localStorage`)
- **HTTP Client:** Axios
- **Others:** React Spinners, conditional rendering, responsive UI


## 🧱 Project Structure

Chatbot-frontend/
├── components/
│ ├── Card.js
│ └── Product.js
├── pages/
│ ├── Auth.js
│ ├── Register.js
│ ├── Unauth.js
├── App.js
└── main.jsx


## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sreyasree-001/Chatbot-frontend.git
   cd Chatbot-frontend
2. npm install
3. npm run dev
4. Create a .env file and define your backend URL:
    VITE_API_URL=http://localhost:5000
   
📸 Screenshots

🔐 Authentication Flow
User registers or logs in

JWT token is saved in localStorage

Token is sent in Authorization: Bearer <token> header for authenticated requests

Chatbot greets the user by name and offers suggestions

📦 Sample API Call with Token
axios.get(`${API_URL}/products`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

🙋‍♀️ Author
Sreyasree Sasmal
🔗 Portfolio
📫 sreyasree202@gmail.com

📄 License
This project is licensed under the MIT License.
