const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

// app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

// routes
app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

// port
const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
