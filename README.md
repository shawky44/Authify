# 🔐 Authify – Authentication & User Management API

A secure Node.js + Express + MongoDB authentication and user management API with features like JWT-based authentication, password hashing, email services, and input validation.

## 🚀 Features

- 🔑 User Authentication (Register, Login, Logout).
- 🔒 Secure password hashing with bcryptjs.
- 🪪 JWT for secure API access.
- 📧 Email services with nodemailer (e.g., password reset, verification).
- 🗄️ MongoDB integration with Mongoose.
- 🛡️ Security with helmet, cors, and cookies.
- ✅ Input validation using joi and express-validator.
- 🌐 Environment variables with dotenv.

## 📂 Project Structure
```
.
├── src
│   ├── Controller
│   │   └── authController.js
│   ├── Model
│   │   └── userModel.js
│   ├── Routes
│   │   └── authRoute.js
│   ├── Utils
│   │   └── emailService.js
│   └── index.js
├── package.json
├── .env
└── README.md
```

## ⚙️ Installation & Setup

Clone the repository:
```bash
git clone https://github.com/your-username/Authify.git
cd Authify
```

Install dependencies:
```bash
npm install
```

Create `.env` file and add your configs:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authify
TOKEN_SECRET=yourSuperSecretKey
EMAIL_USER=yourEmail@example.com
EMAIL_PASS=yourEmailPassword
```

Run the server:
```bash
npm run dev   # development with nodemon
npm start     # production
```

👉 Server will start at [http://localhost:5000](http://localhost:5000)

## 🔑 API Endpoints

### 📝 Register
`POST /api/auth/register`
```json
{
  "name": "Shawky",
  "email": "shawky@example.com",
  "password": "mypassword123"
}
```

### 🔓 Login
`POST /api/auth/login`
```json
{
  "email": "shawky@example.com",
  "password": "mypassword123"
}
```
✅ Returns JWT token.

### 🚪 Logout
`POST /api/auth/logout`  
✅ Destroys session/token.

### 👤 Get Profile
`GET /api/auth/me`
```
Authorization: Bearer <your-token>
```
✅ Returns user data.

### 🔄 Reset Password (via Email)
`POST /api/auth/reset-password`  
✅ Sends password reset link using nodemailer.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- nodemailer
- joi
- express-validator

## 📌 Best Practices in Authify

- Separate folders for controllers, models, routes, and utils.
- Strong password hashing with bcryptjs.
- Secure authentication using JWT.
- Validation at both request & schema levels.
- Safe environment configs with `.env`.
- Consistent API responses.
- Helmet + CORS for security.

## 👨‍💻 Author

Created by **Shawky ✨**

## 📜 License

This project is licensed under the **MIT License**.
