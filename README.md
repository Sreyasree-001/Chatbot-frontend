# 💬 Chatbot Frontend

A modern and responsive frontend an e-commerce chatbot. This React-based interface allows users to interact with the chatbot, ask product-related queries, and view dynamically rendered product cards.

🔗 [Chatbot-server Backend Repo](https://github.com/Sreyasree-001/Chatbot-server)

## ✨ Features

- 🔐 JWT-based user authentication
- 🧠 Chat interface with smart suggestions
- 📦 Displays product data from MySQL backend
- 🎨 Styled with Tailwind CSS for a clean UI
- 🔄 Dynamic rendering with loading states

## 🛠️ Tech Stack

- **Framework:** React.js (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** JWT (stored in `localStorage`)
- **HTTP Client:** Axios
- **Others:** react-router-dom, React Spinners, conditional rendering, responsive UI


## 🧱 Project Structure

![image](https://github.com/user-attachments/assets/2ea7476f-18f7-41fb-9180-31f75c3844df)


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

![login page](https://github.com/user-attachments/assets/ea6a3c40-2d79-4c4e-8f42-6b7d816ff175)

![interface](https://github.com/user-attachments/assets/2c34bc51-673d-4764-85f9-93cee616fbbe)

## 🔐 Authentication Flow
User registers or logs in

JWT token is saved in localStorage

Token is sent in Authorization: Bearer <token> header for authenticated requests

Chatbot greets the user by name and offers suggestions

### 📦 Sample API Call with Token
axios.get(`${API_URL}/products`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

### 🙋‍♀️ Author
      Sreyasree Sasmal
      📫 sreyasree202@gmail.com

### 📄 License
      This project is licensed under the MIT License.


[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Sreyasree-001/Chatbot-frontend)
