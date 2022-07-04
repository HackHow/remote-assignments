const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
// 因為 alert() 不能在 node.js 使用，所以需要載入 alert 套件
const alert = require("alert");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = 3000;

app.use(express.static("public"));

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "how",
  password: "123",
  database: "assignment",
});

// Connect
db.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// Create a server object on root URL
// 如果 method 是 POST 時，代表資料會是 urlencoded type，必須使用 body-parser 套件
app.post("/signup", urlencodedParser, (req, res) => {
  console.log("email: " + req.body.email);
  console.log("password: " + req.body.pwd);

  const userEmail = req.body.email;
  const userPwd = req.body.pwd;
  const checkSql = `SELECT email FROM user WHERE email = '${userEmail}'`;
  db.query(checkSql, (err, result) => {
    if (err) throw err;
    // 若 Table 裡面"沒有資料"或是沒有發生 "email 重複"，就匯入資料
    if (Object.keys(result).length === 0) {
      const postData = { email: userEmail, password: userPwd };
      const insertSql = "INSERT INTO user SET ?";
      db.query(insertSql, postData, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.redirect("/member");
        // res.send("1 record inserted");
      });
    } else {
      console.log("Email already be registered");
      alert("Email already be registered");
    }
  });
});

app.post("/signin", urlencodedParser, (req, res) => {
  console.log("email: " + req.body.email);
  console.log("password: " + req.body.pwd);

  const userEmail = req.body.email;
  const userPwd = req.body.pwd;
  const checkSql = `SELECT email FROM user WHERE email = '${userEmail}' and password = '${userPwd}'`;
  db.query(checkSql, (err, result) => {
    if (err) throw err;
    // 若 Table 裡面"沒有資料"就報錯
    if (Object.keys(result).length === 0) {
      console.log("email/password may be wrong");
      alert("email/password may be wrong");
    } else {
      res.redirect("/member");
    }
  });
});

app.get("/member", (req, res) => {
  res.send(
    `<h1><i>Registration success!</i></h>
    <br/>
    <h1><u>Welcome to MyWebsite</u></h1>
    `
  );
});

// Server object listens on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
