const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://dynamodb:8000",
});

exports.lambdaHandler = async (event, context) => {
  let items = await docClient
    .scan({
      TableName: "ToDo",
      FilterExpression: "completed = :v",
      ExpressionAttributeValues: {
        ":v": false,
      },
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
