const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://dynamodb:8000",
});

exports.lambdaHandler = async (event, context) => {
  let item = await docClient
    .update({
      TableName: "ToDo",
      Key: {
        id: event.pathParameters.id,
      },
      UpdateExpression: "set completed = :v",
      ConditionalExpression: "completed NE :v",
      ExpressionAttributeValues: {
        ":v": true,
      },
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Task marked as complete" }),
  };
};
