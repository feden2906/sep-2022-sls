const {ObjectId} = require("mongodb");

const {dbConnection} = require("../mongo.client");

const getTodo = async (event) => {
  const {todoId} = event.pathParameters;

  const todo = await dbConnection
      .collection('todos')
      .findOne({ _id: new ObjectId(todoId) });

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler: getTodo,
}
