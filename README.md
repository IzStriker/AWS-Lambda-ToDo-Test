Create Todo Table

```bash
aws dynamodb create-table --table-name ToDo --attribute-definitions AttributeName=id,AttributeType=N --key-schema AttributeName=id,KeyType=HASH --billing-mode PAY_PER_REQUEST --endpoint-url http://localhost:8000
```

Start Dynamo Db

```bash
docker compose up
```

Start Api

```bash
sam local start-api --docker-network todo-api
```

Start DynamoDB Gui

```bash
dynamodb-admin
```
