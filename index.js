const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = "secretKey";

app.get("/", (req, res) => {
  res.json({
    message: "A sample API"
  });
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "yuvi",
    email: "yuvraj202001@gmail.com"
  };

  jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ token });
    }
  });
});

app.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Access granted",
        data: authData
      });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(5000, () => {
  console.log("App running on port 5000");
});
