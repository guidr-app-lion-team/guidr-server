require('dotenv').config();
const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('./dbConfig');
const jwt = require('jsonwebtoken');
const hashPassword = require('../helpers/hashPassword');



// const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/register', register);
  server.post('/login', login);
  server.get('/adventures', authenticate, getGuidr);  
};




function register(req, res) {
  // implement user registration
  const userInfo = req.body;

  const hash = hashPassword(userInfo.password);

  userInfo.password = hash;

  db('users')
    .insert(userInfo)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
}

function generateToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: '45m',
  };

  return jwt.sign(payload, secret, options);
}

function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        // login is successful
        // create the token
        const token = generateToken(user);

        res.status(200).json({ username: `${creds.username}`, token });
      } else {
        res.status(401).json({ you: 'shall not pass!!' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function getGuidr(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://guidr2.herokuapp.com/adventures', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching User', error: err });
    });
}