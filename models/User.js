const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 18,
  },
  password: {
    type: "string",
    required: true,
    minlength: 6,
    maxlength: 18,
  },
  favourites: [
    {
      cover: String,
      mangaEP: String,
      rating: Number,
      status: String,
      title: String,
      view: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
