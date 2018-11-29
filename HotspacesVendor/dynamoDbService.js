let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    addPromo: function (promoData) {
        return ddb.put({
            TableName: 'Promotions',
            Item: {
                'promoId': promoData.promoId,
                'vendorId': promoData.vendorId,
                'termsNConditions': promoData.terms,
                'offerType': promoData.offerType,
                'startDate': promoData.startDate,
                'endDate': promoData.endDate,
                'startTime': promoData.startTime,
                'endTime': promoData.endTime,
                'selectedDays': promoData.selectedDays,
                'description': promoData.description,
                'unitPrice': promoData.unitPrice,
                'title': promoData.title,
                'imgUrls': promoData.imgUrl,
                'discount': promoData.discount,
                'category': promoData.businessType,
                'timestamp': promoData.timestamp,
                'locationBox': promoData.locationBox,
                'latNLong': promoData.latNLong
            }
        }).promise()

    }


    // deletePromo: function (promoData) {
    //     return ddb.delete({
    //         TableName: 'Promotions',
    //         Key: {
    //             'promoId': promoData.promoID,
    //             'timestamp': timestamp
    //         }
    //     }).promise()
    // },

    // retrievePromos: function (date) {
    //     return ddb.scan({
    //         TableName: 'Promotions',
    //         ExpressionAttributeValues: {
    //             ':date': date
    //         },
    //         FilterExpression: 'startDate <= :date and endDate >= :date'
    //     }).promise()
    // },

    // getVendor: function (vendorId) {
    //     return ddb.get({
    //         TableName: 'HS_vendor',
    //         Key: {
    //             'vendor_id': vendorId
    //         }
    //     }).promise()
    // }
}