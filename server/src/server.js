const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const authRouter = require("./routers/authRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("images"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/api/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
