🔐 Authify – Authentication & User Management API

A secure Node.js + Express + MongoDB authentication and user management API with features like JWT-based authentication, password hashing, email services, and input validation.

🚀 Features

🔑 User Authentication (Register, Login, Logout).

🔒 Secure password hashing with bcryptjs.

🪪 JWT for secure API access.

📧 Email services with nodemailer (password reset, verification).

🗄️ MongoDB integration with Mongoose.

🛡️ Security with helmet, cors, and cookies.

✅ Input validation using joi and express-validator.

🌐 Environment variables with dotenv.

📂 Project Structure
.
├── src
│ ├── Controller
│ │ └── authController.js
│ ├── Model
│ │ └── userModel.js
│ ├── Routes
│ │ └── authRoute.js
│ ├── Utils
│ │ └── emailService.js
│ └── index.js
├── package.json
├── .env
└── README.md

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/Authify.git
cd Authify

Install dependencies:

npm install

Create .env file and add your configs:

PORT=5000
MONGO_URI=mongodb://localhost:27017/authify
TOKEN_SECRET=yourSuperSecretKey
EMAIL_USER=yourEmail@example.com
EMAIL_PASS=yourEmailPassword

Run the server:

npm run dev # development with nodemon
npm start # production

👉 Server will start at http://localhost:5000

🔑 API Endpoints
📝 Register
POST /api/auth/register

Body:

{
"name": "Shawky",
"email": "shawky@example.com",
"password": "mypassword123"
}

✅ Success Response:

{
"success": true,
"message": "User registered successfully",
"user": {
"id": "64fa9c3e...",
"name": "Shawky",
"email": "shawky@example.com"
}
}

❌ Error Response:

{
"success": false,
"message": "Email already exists"
}

🔓 Login
POST /api/auth/login

Body:

{
"email": "shawky@example.com",
"password": "mypassword123"
}

✅ Success Response:

{
"success": true,
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

❌ Error Response:

{
"success": false,
"message": "Invalid email or password"
}

🚪 Logout
POST /api/auth/logout

✅ Success Response:

{
"success": true,
"message": "User logged out successfully"
}

👤 Get Profile
GET /api/auth/me

Header:

Authorization: Bearer <your-token>

✅ Success Response:

{
"success": true,
"user": {
"id": "64fa9c3e...",
"name": "Shawky",
"email": "shawky@example.com"
}
}

❌ Error Response (if token invalid):

{
"success": false,
"message": "Unauthorized"
}

🔄 Reset Password (via Email)
POST /api/auth/reset-password

Body:

{
"email": "shawky@example.com"
}

✅ Success Response:

{
"success": true,
"message": "Password reset link sent to your email"
}

❌ Error Response:

{
"success": false,
"message": "User not found"
}

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

bcryptjs

jsonwebtoken

nodemailer

joi

express-validator

📌 Best Practices in Authify

Separate folders for controllers, models, routes, and utils.

Strong password hashing with bcryptjs.

Secure authentication using JWT.

Validation at both request & schema levels.

Safe environment configs with .env.

Consistent API responses.

Helmet + CORS for security.

👨‍💻 Author

Shawky

📜 License

This project is licensed under the MIT License.
