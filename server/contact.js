const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  {
    collection: "contact",
  }
);

mongoose.model("contact", UserDetailsScehma); 