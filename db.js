const { MongoClient, ObjectId } = require('mongodb')

// const connectionUrl = 'mongodb://mongo:27017'
const connectionUrl = "mongodb+srv://keshav:12345@cluster0.xxffv.mongodb.net/Items?retryWrites=true&w=majority";


const dbName = 'Items'

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

module.exports = { init}
