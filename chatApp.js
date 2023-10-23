const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No messages sent by user";
    } else {
      res.send(
        `${data.toString()}<form onSubmit="document.getElementById('userName').value=localStorage.getItem('UserName')" action='/' method='POST'><input type='text' name='message' id='message'><input type='hidden' id='userName' name='username'><button type='submit'>Send Message</button></form>`
      );
    }
  });
});

//message page
app.post("/", (req, res) => {
  let user = req.body.username;
  let sentMessage = req.body.message;
  console.log(user, "User");
  fs.appendFile("message.txt", `${user}>>${sentMessage}`, (err) => {
    if (err) console.log(err);
    else res.redirect("/");
  });
});

app.get("/login", (req, res, next) => {
  res.send(
    `<form action="/" onsubmit="localStorage.setItem('UserName',document.getElementById('username').value)"><input type="text" name="username" id="username"><button type="submit">Login</button></form>`
  );
});

app.listen(3000);
