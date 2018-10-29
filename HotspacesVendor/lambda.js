let AWS = require('aws-sdk');
let dynamoDBService = require('./dynamoDbService');

exports.handler = function (event, context, callback) {
    console.log(event);
    let promoId = event.promoId;
    let vendorId = event.vendorId;
    let offerType = event.offerType;
    let startDate = event.startDate;
    let endDate = event.endDate;
    let startTimeSlots = event.startTimeSlots;
    let endTimeSlots = event.endTimeSlots;
    let description = event.description;
    let title = event.title;
    let unitPrice = event.unitPrice;
    let imgUrl = event.imgUrl;

    dynamoDBService.addPromo({
        promoId: promoId,
        vendorId: vendorId,
        offerType: offerType,
        startDate: startDate,
        endDate: endDate,
        startTimeSlots: startTimeSlots,
        endTimeSlots: endTimeSlots,
        description: description,
        title: title,
        unitPrice: unitPrice,
        imgUrl: imgUrl
    }).promise().then(function () {
        callback(null, {
            "isBase64Encoded": true,
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
            },
            "body": 'Successfully added promotion : ' + title
        });
    }).catch(function (error) {
        console.log(error);
        callback(null, {
            "isBase64Encoded": true,
            "statusCode": 502,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
            },
            "body": 'user could not add the promotion ' + error.message
        });
    });
}

















