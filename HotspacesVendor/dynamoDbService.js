let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    addPromo: function (promoData) {
        return ddb.put({
            TableName: 'HS_Promotions',
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

    },


    deletePromo: function (promoData) {
        return ddb.delete({
            TableName: 'HS_Promotions',
            Key: {
                'promoId': promoData.promoID,
                'timestamp': timestamp
            }
        }).promise()
    },

    retrievePromos: function (date) {
        return ddb.scan({
            TableName: 'HS_Promotions',
            ExpressionAttributeValues: {
                ':date': date
            },
            FilterExpression: 'startDate <= :date and endDate >= :date'
        }).promise()
    },

    getVendor: function (vendorId) {
        return ddb.get({
            TableName: 'HS_vendor',
            Key: {
                'vendor_id': vendorId
            }
        }).promise()
    },

    updatePromo: function (updatedData) {
        return ddb.update({
            TableName: 'HS_Promotions',
            Key: {
                'promoId': updatedData.promoId,
                'timestamp': updatedData.timestamp
            },
            ExpressionAttributeNames: {
                '#promoId': 'promoId',
                '#category': 'category',
                '#description': 'description',
                '#discount': 'discount',
                '#endDate': 'endDate',
                '#endTime': 'endTime',
                '#imgUrls': 'imgUrls',
                '#latNLong': 'latNLong',
                '#locationBox': 'locationBox',
                '#offerType': 'offerType',
                '#selectedDays': 'selectedDays',
                '#startDate': 'startDate',
                '#startTime': 'startTime'
            },
            ExpressionAttributeValues: {
                ':promoId': updatedData.promoId,
                ':category': updatedData.businessType,
                ':description': updatedData.description,
                ':discount': updatedData.discount,
                ':endDate': updatedData.endDate,
                ':endTime': updatedData.endTime,
                ':imgUrls': updatedData.imgUrl,
                ':latNLong': updatedData.latNLong,
                ':locationBox': updatedData.locationBox,
                ':offerType': updatedData.offerType,
                ':selectedDays': updatedData.selectedDays,
                ':startDate': updatedData.startDate,
                ':startTime': updatedData.startTime
            },
            UpdateExpression: 'set #category = :category , #description = :category , #discount = :discount , #endDate = :endDate , #endTime = :promoId , #imgUrls = :imgUrls , #latNLong = :latNLong , #locationBox = :locationBox , #offerType = :offerType , #selectedDays = :selectedDays , #startDate = :startDate , #startTime = :startTime',
            ConditionExpression: '#promoId = :promoId'
        }).promise()
    }
}















































