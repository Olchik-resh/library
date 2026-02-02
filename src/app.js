const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");
const bookRouter = require("./routes/book");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/test",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDb:", err);
    process.exit(1);
  });

const app = express();

const HelloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World");
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", HelloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

app.use(userRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
