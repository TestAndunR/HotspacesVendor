let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let moment = require('moment');
let dynamoDBService = require('./dynamoDbService');

exports.handler = function (event, context, callback) {

    let date = moment(new Date(event.date)).format('YYYY-MM-DD');

    dynamoDBService.retrievePromos(date).then(function (data) {
        console.log(data);
            callback(null, {
                "isBase64Encoded": true,
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"
                },
                "body": JSON.stringify(data.Items)
            });
        }).catch(function (err) {
            callback(null, {
                "isBase64Encoded": true,
                "statusCode": 502,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"
                },
                "body": err.message
            });
        });
}