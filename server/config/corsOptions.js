import allowedOrigin from "./allowedOrigin.js";

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("cors are not allowed"));
    }
  },
  optionsSuccessStatus: 200,
};
export default corsOptions;

// import allowedOrigin from "./allowedOrigin.js";

// const corsOptions = {
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);

//     // Check if origin is in allowedOrigins or matches a pattern
//     if (
//       allowedOrigin.some((allowed) => {
//         return (
//           origin === allowed ||
//           new RegExp(allowed.replace("*", ".*")).test(origin)
//         );
//       })
//     ) {
//       return callback(null, true);
//     }

//     console.log("Blocked by CORS:", origin);
//     callback(new Error("Not allowed by CORS"));
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// export default corsOptions;

// const corsOptions = {
//   origin: [
//     "https://mern-stack-project-woad.vercel.app",
//     "http://localhost:3000",
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// };
// export default corsOptions;
