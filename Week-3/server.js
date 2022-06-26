const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cookieParser());

// Create a server object on root URL
app.get('/', (req, res) => {
  res.send('Hello, My Server!');
});

// Create a server object on '/data' URL
app.get('/data', (req, res) => {
  const number = Number(req.query.number);
  // determine condition: sum of number if number exists and is a integer or natual number
  if (!number) {
    console.log('input a parameter');
    res.send('Lack of Parameter');
  } 
  else if (!Number.isInteger(number)) {
    console.log('input a integer or natural number');
    res.send('Wrong Parameter');
  } 
  else {
    let sum = 0;
    if (number >= 0) {
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      console.log('The sum of number is successful');
      res.send(`sum of number = <mark>${sum}<mark>`);
    }
    else {
      res.send('Please input a integer greater than 0')
    }
   
  }
});

// Create a server object on '/myName' URL
app.get('/myName', (req, res) => {
  // determine condition:  Whether cookie already be signed?
  if (req.cookies.username) {
    res.send('Your name is <strong><mark>' + req.cookies.username + '</mark></strong>');
  } 
  else {
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
app.get('/trackName', (req, res) => {
  const username = req.query.name;
  if (username) {
    console.log('name existed');
    res.cookie('username', username);
    res.send('Your name is <strong><mark>' + username + '</mark></strong>');
  } 
  else {
    console.log('name non-existed');
    res.redirect('/myName');
  }
});

// Server object listens on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
