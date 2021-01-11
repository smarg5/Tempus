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
}

export default (req, res) => {
  if (req.method === 'POST') {

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

    });
  }
}
