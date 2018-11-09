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
                'selectedDays': promoData.selectedDays,
                'Description': promoData.description,
                'UnitPrice': promoData.unitPrice,
                'Title': promoData.title,
                'ImgUrls': promoData.imgUrls,
                'Discount': promoData.discount,
                'Terms': promoData.terms,
                'BusinessType': promoData.businessType
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
    }
}