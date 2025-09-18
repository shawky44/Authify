# 🔐 Authify – Authentication & User Management API  

A **Node.js + Express + MongoDB** backend application for secure user authentication and management.  
It supports **JWT-based authentication, email verification, password hashing**, and basic post management.  

---

## 🚀 Features
- User Registration & Login.  
- Password Hashing using `bcryptjs`.  
- Authentication with **JWT (JSON Web Tokens)**.  
- Email Verification with `nodemailer`.  
- CRUD operations for Posts (with user ownership).  
- Input validation using **Joi**.  
- Secure cookies for token storage.  

---

## 📂 Project Structure
```
.
├── src
│   ├── Controllers
│   │   ├── authController.js
│   │   └── postController.js
│   ├── Models
│   │   ├── userModel.js
│   │   └── postModel.js
│   ├── Middlewares
│   │   └── identifier.js
│   ├── Utils
│   │   └── validationSchema.js
│   └── index.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup  

1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/Authify.git
   cd Authify
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Create `.env` file:  
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/authify
   TOKEN_SECRET=your-secret-key
   NODE_ENV=development
   ```

4. Start the server:  
   ```bash
   npm run dev   # with nodemon
   npm start     # normal start
   ```

👉 The server runs on `http://localhost:3000/`  

---

## 🔑 API Endpoints  

### 👤 User Auth  

#### Register  
```http
POST /api/auth/register
```
**Body**:  
```json
{
  "email": "shawky@example.com",
  "password": "12345678"
}
```

#### Login  
```http
POST /api/auth/login
```
**Body**:  
```json
{
  "email": "shawky@example.com",
  "password": "12345678"
}
```

✅ Returns JWT + sets cookie.  

---

### 📝 Posts  

#### Create Post  
```http
POST /api/posts
```
**Headers**:  
`Authorization: Bearer <token>`  

**Body**:  
```json
{
  "title": "My first post",
  "description": "This is the content of my post."
}
```

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [Mongoose](https://mongoosejs.com/)  
- [JWT](https://jwt.io/)  
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)  
- [nodemailer](https://nodemailer.com/)  
- [Joi](https://joi.dev/)  
- [dotenv](https://www.npmjs.com/package/dotenv)  

---

## 📌 Best Practices in This Project
- Separation of concerns (Controllers, Models, Routes, Middlewares).  
- Secure JWT authentication with expiry.  
- Validation with **Joi** + Mongoose schema rules.  
- Error handling with proper status codes.  
- Environment variables for secrets.  
- Consistent JSON response format.  

---

## 📜 License
This project is licensed under the MIT License.  
