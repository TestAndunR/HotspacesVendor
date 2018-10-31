let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    let body = JSON.parse(event.body);
    let vendor = event.vendorId;
    // console.log(vendor);
    ddb.scan({
        TableName: 'Promotions',
        ExpressionAttributeValues: {
            ':vendor': "c1fdc7d1-7c7f-48e1-9529-1b46378f90ce"
        },
        FilterExpression: 'VendorId = :vendor'
    }).promise().then(function (data) {
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
            "body": 'Error occured in scanning ' + error.message
        });
    });
}