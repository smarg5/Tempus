const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const v4 = require('uuid').v4;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


console.log(process.env.DATABASE_URL)
console.log(process.env)

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = 'day-db';

function save(db, userId, date, content, mood, activities, callback) {
  const collection = db.collection('days');
    console.log('start reached');
    collection.insertOne(
        {
        userId: userId,
        date: date,
        content: content,
        mood: mood,
        activities: activities,
        },
        function(err, userCreated) {
        assert.equal(err, null);
        },
    );
    console.log('end reached');
}

export default (req, res) => {
  if (req.method === 'POST') {
    // signup
    // try {
    //   assert.notEqual(null, req.body.email, 'Email required');
    //   assert.notEqual(null, req.body.password, 'Password required');
    // } catch (bodyError) {
    //   res.status(403).json({error: true, message: bodyError.message});
    // }

    // verify email does not exist already
    client.connect(function(err) {
      assert.equal(null, err);
      console.log('Connected to MongoDB server =>');
      const db = client.db(dbName);
      const content = req.body.content;
      const mood = req.body.moods;
      const activities = req.body.activities;
      const userId = req.body.userId
      let day = new Date()

      save(db, userId, day, content, mood, activities, () => {})

    //   findUser(db, email, function(err, user) {
    //     if (err) {
    //       res.status(500).json({error: true, message: 'Error finding User'});
    //       return;
    //     }
    //     if (!user) {
    //       // proceed to Create
    //       createUser(db, email, password, function(creationResult) {
    //         if (creationResult.ops.length === 1) {
    //           const user = creationResult.ops[0];
    //           const token = jwt.sign(
    //             {userId: user.userId, email: user.email},
    //             jwtSecret,
    //             {
    //               expiresIn: 3000, //50 minutes
    //             },
    //           );
    //           res.status(200).json({token});
    //           return;
    //         }
    //       });
    //     } else {
    //       // User exists
    //       res.status(403).json({error: true, message: 'It seems like you already have an account with us :)'});
    //       return;
    //     }
    //   });
    });
  }
}
