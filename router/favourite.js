const express = require("express");
const User = require("../models/User");
const app = express.Router();

app.post("/:username", async (req, res) => {
    const username = req.params.username;

  try {
    const mangaObj = {
      cover: req.body.cover,
      mangaEP: req.body.mangaEP,
      rating: req.body.rating,
      status: req.body.status,
      title: req.body.title,
      view: req.body.view,
    };

    await User.findOneAndUpdate(
      {
        username: username,
      },
      {
        $push: {
          favourites: mangaObj,
        },
      }
    );
    res.status(200).send("success");
  } catch (err) {
    console.error(err);
  }
});

app.get("/:username", async (req, res) => {
    const username = req.params.username;

    console.log(username)

    try {
        const user = await User.findOne({
            username: username
        })

        if (!user) return res.status(404).send({status: 'Not Found'})

        res.json(user)
    } catch (err) {
        console.error(err);
    }
})

module.exports = app;
