const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
//const url = "mongodb+srv://mhApp:Tempus@cluster0.aodby.mongodb.net/test";
const jwtSecret = 'SUPERSECRETE20220';

const saltRounds = 10;
const dbName = 'simple-login-db';


console.log(process.env.DATABASE_URL)

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function findUser(db, email, callback) {
  const collection = db.collection('user');
  collection.findOne({email}, callback);
}

function authUser(db, email, password, hash, callback) {
  const collection = db.collection('user');
  bcrypt.compare(password, hash, callback);
}

export default (req, res) => {
  if (req.method === 'POST') {
    //login
    try {
      assert.notEqual(null, req.body.email, 'Email required');
      assert.notEqual(null, req.body.password, 'Password required');
    } catch (bodyError) {
      res.status(403).send(bodyError.message);
    }

    client.connect(function(err) {
      assert.equal(null, err);
      console.log('Connected to MongoDB server =>');
      const db = client.db(dbName);
      const email = req.body.email;
      const password = req.body.password;

      findUser(db, email, function(err, user) {
        if (err) {
          res.status(500).json({error: true, message: 'Error finding User'});
          return;
        }
        if (!user) {
          res.status(404).json({error: true, message: 'You have not signed up with us yet :('});
          return;
        } else {
          authUser(db, email, password, user.password, function(err, match) {
            if (err) {
              res.status(500).json({error: true, message: 'Authentification Failed'});
            }
            if (match) {
              const token = jwt.sign(
                {userId: user.userId, email: user.email},
                jwtSecret,
                {
                  expiresIn: 3000, //50 minutes
                },
              );
              res.status(200).json({token});
              return;
            } else {
              res.status(401).json({error: true, message: 'Please check your email or password again!'});
              return;
            }
          });
        }
      });
    });
  } else {
    // Handle any other HTTP method
    res.statusCode = 401;
    res.end();
  }
};