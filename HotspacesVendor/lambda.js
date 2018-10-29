let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    let promoId = event.body.promoId;
    let vendorId = event.body.vendorId;
    let offerType = event.body.offerType;
    let startDate = event.body.startDate;
    let endDate = event.body.endDate;
    let startTimeSlots = event.body.startTimeSlots;
    let endTimeSlots = event.body.endTimeSlots;
    let description = event.body.description;
    let title = event.body.title;
    let unitPrice = event.body.unitPrice;
    let imgUrl = event.body.imgUrl;

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
            'ImgUrl': imgUrl
        }
    }).promise().then(function (data) {
        console.log("Success " + data)
        //your logic goes here
    }).catch(function (err) {
        //handle error
        console.log("Error" + err)
    });

    callback(null, 'Successfully executed');
}

















