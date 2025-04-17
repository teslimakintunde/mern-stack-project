const allowedOrigin = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
  "http://localhost:5173",
  "https://mern-stack-project-woad.vercel.app",
  "https://*.vercel.app",
  "http://localhost:3000", // Add your local dev server
  process.env.FRONTEND_URL, // Add this for production
];

export default allowedOrigin;
