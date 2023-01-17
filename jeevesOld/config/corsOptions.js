//CORS Lists
const whitelist = ["http://localhost:3500", "http://127.0.0.1:5500"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by Big Daddy CORS!"));
    }
  },
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
