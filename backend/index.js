const express = require("express");
const app = express();
require("dotenv").config();
const ExpressError = require("./utilities/expressError");

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.get("/", (req, res) => {
  res.redirect("https://expressjs.com/");
});

app.use("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).json(message);
});
