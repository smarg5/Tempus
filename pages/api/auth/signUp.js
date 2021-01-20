import { strictEqual } from 'assert';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const v4 = require('uuid').v4;
require('dotenv').config()
var sha256 = require('js-sha256')


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

function createUser(db, email, password, name, callback) {
  const collection = db.collection('user');
    collection.insertOne(
      {
        userId: v4(),
        email: email,
        password: sha256(password),
        name: name,
      },
      function(err, userCreated) {
        strictEqual(err, null);
        callback(userCreated);
      },
    );
}

export default (req, res) => {
  if (req.method === 'POST') {
    // signup
    try {
      assert.notEqual(null, req.body.email, 'Email required');
      assert.notEqual(null, req.body.password, 'Password required');
    } catch (bodyError) {
      res.status(403).json({error: true, message: bodyError.message});
    }

    console.log(client)
    // verify email does not exist already
    client.connect(function(err) {
      assert.equal(null, err);
      console.log('Connected to MongoDB server =>');
      const db = client.db(dbName);
      const email = req.body.email;
      const password = req.body.password;
      const name = req.body.name;

      findUser(db, email, function(err, user) {
        if (err) {
          res.status(500).json({error: true, message: 'Error creating User'});
          return;
        }
        if (!user) {
          // proceed to Create
          createUser(db, email, password, name, function(creationResult) {
            if (creationResult.ops.length === 1) {
            //   const user = creationResult.ops[0];
            //   const token = jwt.sign(
            //     {userId: user.userId, email: user.email},
            //     jwtSecret,
            //     {
            //       expiresIn: 3000, //50 minutes
            //     },
            //   );
              res.status(200);
              return;
            }
          });
        } else {
          // User exists
          res.status(403)
        //   res.status(403).json({error: true, message: 'It seems like you already have an account with us :)'});
          return;
        }
      });
    });
  } else {
    // Handle any other HTTP method
    res.status(200).json({users: ['John Doe']});
  }
};