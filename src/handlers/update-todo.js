const {ObjectId} = require("mongodb");

const {dbConnection} = require("../mongo.client");

const getTodo = async (event) => {
    const {completed} = JSON.parse(event.body);
    const {todoId} = event.pathParameters;

    const todo = await dbConnection
        .collection('todos')
        .findOne({ _id: new ObjectId(todoId) });

    if (!todo) return {
        statusCode: 422,
        body: 'Entity not found',
    }

    await dbConnection.collection('todos').updateOne(
        { _id: todo._id },
        {
            $set: {
                updatedAt: new Date().toISOString(),
                completed,
            }
        }
    );

    return {
        statusCode: 200,
        body: JSON.stringify('Updated'),
    };
};

module.exports = {
    handler: getTodo,
}
