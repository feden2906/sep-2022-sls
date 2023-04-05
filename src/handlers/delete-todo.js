const {ObjectId} = require("mongodb");

const {dbConnection} = require("../mongo.client");

const deleteTodo = async (event) => {
    const {todoId} = event.pathParameters;

    const todo = await dbConnection
        .collection('todos')
        .findOne({_id: new ObjectId(todoId)});

    if (!todo) return {
        statusCode: 422,
        body: 'Entity not found',
    }

    await dbConnection.collection('todos').deleteOne({ _id: todo._id });

    return {
        statusCode: 204,
    };
};

module.exports = {
    handler: deleteTodo,
}
