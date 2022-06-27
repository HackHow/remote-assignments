const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(cookieParser());

// Create a server object on root URL
app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

// Create a server object on '/data' URL
app.get("/data", (req, res) => {
  numValue = req.query.number;
  numValueLen = numValue.length;
  // 透過 req.query 抓出來的值，type 會是 string，所以先判斷 string 是否為空值，若不為空，再將其轉為 number
  if (numValueLen != 0) {
    const number = Number(numValue);
    if (!Number.isInteger(number)) {
      console.log("input a integer or natural number");
      res.send("Wrong Parameter");
    } else {
      let sum = 0;
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      console.log("The sum of number is successful");
      res.send(`sum of number = <mark>${sum}<mark>`);
    }
  } else {
    console.log("input a parameter");
    res.send("Lack of Parameter");
  }
});

// Create a server object on '/myName' URL
app.get("/myName", (req, res) => {
  // determine condition:  Whether cookie already be signed?
  if (req.cookies.username) {
    res.send(
      "Your name is <strong><mark>" + req.cookies.username + "</mark></strong>"
    );
  } else {
    // respone text input and button, and use a method of 'get' add key(name) value(name) pairs to url(/trackName)
    res.send(
      `<form action='http://localhost:3000/trackName' method='get'>
      <input name='name' id='number' type='text'>
      <br/><br/>
      <button type = 'submit'>Submit</button>
      </form>`
    );
  }
});

// Create a server object on '/trackName' URL
app.get("/trackName", (req, res) => {
  const username = req.query.name;
  if (username) {
    console.log("name existed and passing data /track server");
    res.cookie("username", username);
    res.redirect("/myName");
  } else {
    console.log("name non-existed");
    res.redirect("/myName");
  }
});

// Server object listens on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
