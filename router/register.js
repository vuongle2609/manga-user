const express = require("express");
const User = require("../models/User");
const app = express.Router();

app.post("/", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      password: req.body.password
    });

    const user = await newUser.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({
        status: 'error',
    });
  }
});

module.exports = app;
