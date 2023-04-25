const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    email: String,
    password: String,
  }
);

mongoose.model("login", UserDetailsScehma); 