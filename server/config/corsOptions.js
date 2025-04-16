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
