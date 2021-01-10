const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
const v4 = require('uuid').v4;
const jwt = require('jsonwebtoken');
require('dotenv').config()
const jwtSecret = 'SUPERSECRETE20220';

const saltRounds = 10;

const dbName = 'simple-login-db';
// app.post('/sentiment', async (req, res) => {
//   var classification = sentiment.analyze(req.body.text)
//   res.send(classification)
var ml = require('sentiment');
var sentiment = new ml();

// })
export default (req, res) => {
  if (req.method === 'POST') {
    var classification = sentiment.analyze(req.body.content)
    res.send(classification)
  }
};