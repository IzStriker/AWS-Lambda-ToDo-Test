aws dynamodb create-table ^
--table-name ToDo ^
--attribute-definitions ^
    AttributeName=id,AttributeType=N ^
--key-schema ^
    AttributeName=id,KeyType=HASH ^
--billing-mode PAY_PER_REQUEST ^
--endpoint-url http://localhost:8000