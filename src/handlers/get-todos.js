 const {dbConnection} = require("../mongo.client");

const getTodos = async () => {
  const todos = await dbConnection.collection('todos').find({}).toArray();

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};

module.exports = {
  handler: getTodos,
}
