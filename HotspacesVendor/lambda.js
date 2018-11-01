let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const uuidv4 = require('uuid/v4');

exports.handler = function (event, context, callback) {
    console.log(event);
    // let body = JSON.parse(event.body);
    let promoId = uuidv4();
    let vendorId = event.vendorId;
    let offerType = event.offerType;
    let discount = event.discount;
    let startDate = event.startDate;
    let endDate = event.endDate;
    let startTimeSlots = event.startTimeSlots;
    let endTimeSlots = event.endTimeSlots;
    let description = event.description;
    let title = event.title;
    let unitPrice = event.unitPrice;
    let imgUrl = event.imgUrl;

    ddb.put({
        TableName: 'Promotions',
        Item: {
            'PromoId': promoId,
            'VendorId': vendorId,
            'OfferType': offerType,
            'StartDate': startDate,
            'EndDate': endDate,
            'StartTimeSlots': startTimeSlots,
            'EndTimeSlots': endTimeSlots,
            'Description': description,
            'UnitPrice': unitPrice,
            'Title': title,
            'ImgUrl': imgUrl,
            'Discount': discount
        }
    }).promise().then(function (data) {
        callback(null, {
            "isBase64Encoded": true,
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
            },
            "body": 'Successfully added promotion'
        });
        // console.log("Success " + data)
        //your logic goes here
    }).catch(function (err) {
        //handle error
        console.log("Error" + err)
        callback(null, {
            "isBase64Encoded": true,
            "statusCode": 502,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
            },
            "body": 'Adding promotion to dynamoDB failed ' + error.message
        });
    });
}

















