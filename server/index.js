const OPENAI_API_KEY = ""; //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
//
//
//
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const app = express();
app.use(express.json());
app.use(cors());

// connection to database
const mongoUrl = "mongodb://0.0.0.0:27017/HelpyChat";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetail.js");
const User = mongoose.model("UserInfo");
require("./contact.js");
const contact = mongoose.model("contact");

//User SignUp

app.post("/Signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password:encryptedPassword,
    });
    return res.send({ status: "ok"});
  } 
  catch (error) {
    return res.send({ status: "err" });
  }
});

//contact us

app.post("/Contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await contact.create({
      name,
      email,
      subject,
      message,
    });
    return res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

//User Login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });
      if(res.status(201)){
      return res.json({status: "ok",data:token});
      }
      else {
        return res.json("pass");
    } 
    }
  } else {
    return res.send("ne");
  }
});

//Handeling user question
app.post("/chat", (req, res) => {
  const question = req.body.question;

  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 4000,
      temperature: 0,
    })
    .then((response) => {
      return response.data.choices?.[0].text;
    })
    .then((answer) => {
      console.log({ answer });
      const array = answer
        ?.split("\n")
        .filter((value) => value)
        .map((value) => value.trim());

      return array;
    })
    .then((answer) => {
      res.json({
        answer: answer,
        propt: question,
      });
    });
  console.log({ question });
});

//starting the server
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
