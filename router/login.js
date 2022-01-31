const express = require("express");
const User = require("../models/User");
const app = express.Router();

app.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).send({
        status: "Not Found",
      });
    }

    const validPassword = user.password === req.body.password;

    if (!validPassword) {
      return res.status(404).send({
        status: "wrong pass",
      });
    }

    if (user && validPassword) {
      res.status(200).send({
        status: "success",
      });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;
