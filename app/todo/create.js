const AWS = require("aws-sdk");
const uuid = require("uuid");

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://dynamodb:8000",
});

exports.lambdaHandler = async (event, context) => {
  let response;
  let body = JSON.parse(event.body);

  if (!body.task) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Required field task missing in body." }),
    };
  }

  let params = {
    TableName: "ToDo",
    Item: {
      id: uuid.v4(),
      task: event.body.task,
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

  return response;
};
