const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const v4 = require('uuid').v4;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


console.log("test")
console.log(process.env.DATABASE_URL)
console.log("testtwo")

const client = new MongoClient('mongodb+srv://mhApp:Tempus@cluster0.aodby.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = 'day-db';

async function getDays(db, userId, callback) {
  const collection = db.collection('days');
  let result = await collection.find({userId: userId}).toArray()
  callback(result)
  return result
  // return collection.find({email: userId}).toArray();
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
    console.log(req.body)
    client.connect(function(err) {
      assert.equal(null, err);
      console.log('Connected to MongoDB server =>');
      const db = client.db(dbName);
      console.log("thiosajlfksajdlf")

      let ret = getDays(db, "test@gmail.com", (result)=>{
        console.log(result);
        res.send({days: result, test: "this is a test" })
      })

    //   const content = req.body.body;
            // if (err) {
            //   res.status(500).json({error: true, message: 'Error finding User'});
            //   return;
            // }
            // console.log(days.toArray((result) => result));
            // console.log(days);
            // // res.send({days: days, test: "this is a test"})
            // return;

    //   save(db, new Date(), content, () => {})

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
