let AWS = require('aws-sdk');
let dynamoDBService = require('./dynamoDbService');

exports.handler = function (event, context, callback) {
    console.log("PromoID ",event.queryStringParameters.promoId);
    console.log("VendorID ",event.queryStringParameters.vendorId);
    // let body = JSON.parse(event.body);
    // console.log(body);
    let promoData = {
        promoID: event.queryStringParameters.promoId,
        vendorID: event.queryStringParameters.vendorId
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