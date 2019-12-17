let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    ddb.scan({
        TableName: "Shop"
    }).promise()
        .then(data => {
            // your code goes here
            console.log(data);
        })
        .catch(err => {
            // error handling goes here
            console.log(err);
        });

    return { "message": "Successfully executed" };
};