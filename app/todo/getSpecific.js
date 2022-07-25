const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://dynamodb:8000",
});

exports.lambdaHandler = async (event, context) => {
  let item = await docClient
    .get({
      TableName: "ToDo",
      Key: {
        id: event.pathParameters.id,
      },
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify(item),
  };
};
