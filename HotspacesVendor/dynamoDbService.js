let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    addPromo: function (promoData) {
        return ddb.put({
            TableName: 'Promotions',
            Item: {
                'PromoId': promoData.promoId,
                'VendorId': promoData.vendorId,
                'OfferType': promoData.offerType,
                'StartDate': promoData.startDate,
                'EndDate': promoData.endDate,
                'StartTime': promoData.startTime,
                'EndTime': promoData.endTime,
                'selectedDays': promoData.selectedDays,
                'Description': promoData.description,
                'UnitPrice': promoData.unitPrice,
                'Title': promoData.title,
                'ImgUrls': promoData.imgUrl,
                'Discount': promoData.discount,
                'Terms': promoData.terms,
                'BusinessType': promoData.businessType,
                'Timestamp': promoData.timestamp,
                'LocationBox': promoData.locationBox,
                'LatnLong': promoData.latnLong
            }
        }).promise();
    },

    getPromo: function (vendor) {
        return ddb.scan({
            TableName: 'Promotions',
            ExpressionAttributeValues: {
                ':vendor': vendor
            },
            FilterExpression: 'VendorId = :vendor'
        }).promise();
    },

    deletePromo: function (promoData) {
        return ddb.delete({
            TableName: 'Promotions',
            Key: {
                'PromoId': promoData.promoID,
                'VendorId': promoData.vendorID
            }
        }).promise()
    },

    retrievePromos: function (date) {
        return ddb.scan({
            TableName: 'Promotions',
            ExpressionAttributeValues: {
                ':date': date
            },
            FilterExpression: 'StartDate <= :date and EndDate >= :date'
        }).promise()
    },

    // getVendor: function (vendorId) {
    //     return ddb.get({
    //         TableName: 'HS_vendor',
    //         Key: {
    //             'vendor_id': vendorId
    //         }
    //     }).promise()
    // }
}