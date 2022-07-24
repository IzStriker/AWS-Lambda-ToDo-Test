const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://dynamodb:8000",
});

exports.lambdaHandler = async (event, context) => {
  let response;
  let params = {
    TableName: "ToDo",
    Item: {
      id: 2,
      task: "finish todo app now",
      completed: false,
    },
  };
  await docClient
    .put(params, (err, data) => {
      if (err) {
        response = {
          statusCode: 500,
          body: JSON.stringify(err),
        };
      } else {
        response = {
          statusCode: 201,
          body: JSON.stringify({ message: "data written" }),
        };
      }
    })
    .promise();

  console.log(response);

  return response;
};
