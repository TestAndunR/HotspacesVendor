let AWS = require('aws-sdk');
let dynamoDBService = require('./dynamoDbService');

exports.handler = function (event, context, callback) {
    console.log("Event ",event);
    // let body = JSON.parse(event.body);
    // console.log(body);
    let promoData = {
        promoID: queryStringParameters.promoId,
        vendorID: queryStringParameters.vendorId
    };
    dynamoDBService.deletePromo(promoData).then(function(data){
        console.log(data);
        callback(null, {
                "isBase64Encoded": true,
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"
                },
                "body": "Promo Deleted succesfully"
            });
        }).catch(function (err) {
            console.log("Error", err);
            callback(null, {
                "isBase64Encoded": true,
                "statusCode": 502,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"
                },
                "body": err.message
            });
    })
}