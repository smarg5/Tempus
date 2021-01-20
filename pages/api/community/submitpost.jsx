const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

console.log(process.env.DATABASE_URL)
console.log(process.env)

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = 'post-db';

function save(db, date, content) {
  const collection = db.collection('posts');
    console.log('start reached');
    collection.insertOne(
        {
        date: date,
        content: content,
        },
        function(err, userCreated) {
        // assert.equal(err, null);
        },
    );
    console.log('end reached');
}

export default (req, res) => {
  if (req.method === 'POST') {
    client.connect(function(err) {
      // assert.equal(null, err);
      console.log('Connected to MongoDB server =>');
      const db = client.db(dbName);
      const content = req.body.content;
      let day = new Date()

      save(db, day, content)
    });
  }
}
