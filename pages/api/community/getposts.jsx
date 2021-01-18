const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

console.log(process.env.DATABASE_URL)

const client = new MongoClient('mongodb+srv://mhApp:Tempus@cluster0.aodby.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = 'post-db';

async function getPosts(db, callback) {
  const collection = db.collection('posts');
  let result = await collection.find().sort({date:-1}).toArray()
  callback(result)
  return result
}

export default (req, res) => {
  if (req.method === 'POST') {

    client.connect(function(err) {
      assert.equal(null, err);
      console.log('Connected to MongoDB server =>');
      const db = client.db(dbName);

      let ret = getPosts(db,(result)=>{
        res.send({posts: result, test: "this is a test" })
      })

    });
  }
}
