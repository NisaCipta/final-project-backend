require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/routes");
const cors = require("cors");

// mengubah config
const db = process.env.DATABASE_URL;

mongoose.connect(db);
const database = mongoose.connection;

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/v1/api", route);

app.listen(port, () => {
  console.log("server listening on part", +port);
});
