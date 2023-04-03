module.exports.getUsers = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{id: 1, name: 'Maksym'}]),
  };
};

module.exports.getCars = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{id: 1, model: 'BMW'}]),
  };
};
