const {MongoClient} = require("mongodb");

const {configs} = require("./configs");

const client = new MongoClient(configs.MONGO_URL);

module.exports = {
    client,
    dbConnection: client.db(),
}
