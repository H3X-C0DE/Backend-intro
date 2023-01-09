const http = require("http");
const path = require("path");
const express = require("express");
const { logger } = require("./middleware/logEvents");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/errorHandler");

const { text } = require("express");
// port definition
const PORT = process.env.PORT || 3500;

// middleware
app.use(logger);
app.use(cors());

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
app.use(cors(corsOptions));

app.use(errorHandler);

// Routes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

app.get("/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "view", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404, Json not found" });
  } else req.accepts("txt");
  {
    res.type({ error: "404, text not found" });
  }
});

//Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
