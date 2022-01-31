const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const registry = require("./router/register");
const login = require("./router/login");
const favourite = require("./router/favourite")

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGOOSE_DB, () => {
  console.log("Connecting to Mongoose");
});

app.use(cors());
app.use(express.json());

app.use("/register", registry);

app.use("/login", login);

app.use("/favourite", favourite);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("listen on port " + port);
});
