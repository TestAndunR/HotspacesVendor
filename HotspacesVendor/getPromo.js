let AWS = require('aws-sdk');
let dynamoDBService = require('./dynamoDbService');

exports.handler = function(event, context, callback) {
    // console.log(event);
    let vendorID = event.queryStringParameters.vendorId;
    console.log(vendorID);
    dynamoDBService.getPromo(vendorID).then(function (data) {
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