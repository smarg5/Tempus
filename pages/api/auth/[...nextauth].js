import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
// import MongoClient from 'mongodb'
const MongoClient = require("mongodb").MongoClient;
var sha256 = require('js-sha256');

const dbName = 'simple-login-db';
const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function findUser(db, username, password, callback) {
  console.log('running')
  const collection = db.collection('user');
  console.log('running')
  collection.insertOne({username: "random@gmail.com"})
  collection.findOne({username: 'random@gmail.com'}, callback);
}

function returnUser(credentials) {
        var ret = null;
    client.connect(function(err) {
            // assert.equal(null, err);
            console.log('Connected to MongoDB server ==>');
            const db = client.db(dbName);
            const collection = db.collection('user');
            console.log('asdklfjaslfkjsaf')
            collection.findOne({username: 'random@gmail.com'}, (err, user) => {
                if (err) {
                    return console.log("error: " + err);
                }
                ret = user
                console.log(ret)
                return ret
            })

    })
    console.log("ret " + ret)
    return ret

}

const options = {
    providers: [
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                // var test = await client.connect(function(err) {
                //     var ret
                //     console.log('Connected to MongoDB server ==>');
                //     const db = client.db(dbName);
                //     const collection = db.collection('user');
                //     console.log('asdklfjaslfkjsaf')
                //     console.log(collection)
                //     var testtt = collection.findOne({email: "test@gmail.com"}, (user) => {
                //         ret = user
                //         console.log(user)
                //     })
                //     collection.find({}, (item) => console.log(item))
                //     console.log(testtt)

                //     console.log('ret ' + ret)
                //     return ret
                //     }
                //     )
                await client.connect()
                // var test =
                    // assert.equal(null, err);
                console.log('Connected to MongoDB server ==>');
                const db = client.db(dbName);
                const collection = db.collection('user');
                var test = collection.findOne({email: credentials.email, password: sha256(credentials.password)}).then(
                    result => {
                        if (result) {
                            console.log(result)
                            client.close()
                            return Promise.resolve(result);
                        } else {
                            console.log("ripp")
                            client.close()
                            return Promise.resolve(result);

                        }
                    }
                ).catch (err => {
                        return Promise.resolve(null)
                    }
                )
                // var test = collection.findOne({ username: 'random@gmail.com' }, (err, user) => {
                //     if (err) {
                //         console.log('fail');
                //         client.close()
                //         // return Promise.resolve(null);
                //         return null;
                //         return console.log("error: " + err);
                //     }
                //     console.log('found?');
                //     console.log(user);
                //     client.close()
                //     return user;
                //     // return Promise.resolve(user);
                //     // ret = user
                //     // console.log(ret)
                //     // return ret
                // });
                // client.close()

                // })
                if (test) {
                    console.log(test)
                }
                console.log(Promise.resolve(test))
                console.log(test)
                return Promise.resolve(test);
                // console.log(Promise.resolve(test))
                // return Promise.resolve(test)

                console.log(user)
                // console.log(test)

                // const user = (credentials) => {
                //     var ret;

                // }
                // var test = user(credentials)

                // // You need to provide your own logic here that takes the credentials
                // // submitted and returns either a object representing a user or value
                // // that is false/null if the credentials are invalid.
                // // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // })
                if (user) {
                    // Any user object returned here will be saved in the JSON Web Token
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            }
        })
    ],

    session: {
        jwt: true
    },

    database: process.env.DATABASE_URL,
}

export default(req, res) => NextAuth(req, res, options)