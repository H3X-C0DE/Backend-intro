const http = require("http");
const path = require("path");
const express = require("express");
const { logger } = require("./middleware/logEvents");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const corsOptions = require("../jeeves/config/corsOptions");
const { text } = require("express");

// Port definition
const PORT = process.env.PORT || 3500;

// Middleware
app.use(logger);
app.use(cors());
//corsOptions
app.use(cors(corsOptions));

app.use(errorHandler);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", require("./routes/root"));
app.use("/employees", require("./routes/api/employees"));
app.use("/register", require("./routes/register"));

app.get("/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "view", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404, Json not found" });
  } else if (req.accepts("txt")) {
    res.type({ error: "404, text not found" });
  }
});

//Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
