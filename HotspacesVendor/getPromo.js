let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    let body = JSON.parse(event.body);
    let vendor = body.vendorId;
    ddb.scan({
        TableName: 'Promotions',
        ExpressionAttributeValues: {
            ':vendor': vendor
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
        //handle error
        // console.log(err);
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
    // console.log(event);
    // callback(null, 'Successfully executed');
}