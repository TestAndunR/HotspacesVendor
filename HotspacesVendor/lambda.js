let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

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

















