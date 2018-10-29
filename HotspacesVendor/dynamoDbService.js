// let AWS = require('aws-sdk');
// const ddb = new AWS.DynamoDB.DocumentClient();
// const uuidv4 = require('uuid/v4');

// module.exports = {
  
//     addPromo: function (promoData) {
//         // let prmoId = uuidv4(); 
//         let promoId = promoData.promoId;
//         // let vendorId = promoData.vendorId;
//         // let offerType = promoData.offerType;
//         // let startDate = promoData.startDate;
//         // let endDate = promoData.endDate;
//         // let startTimeSlots = promoData.startTimeSlots;
//         // let endTimeSlots = promoData.endTimeSlots;
//         // let description = promoData.description;
//         // let title = promoData.title;
//         // let unitPrice = promoData.unitPrice;
//         // let imgUrl = promoData.imgUrl;
//         return ddb.put({
//             TableName: 'HS_promotions',
//             Item: {
//                 'PromoId': promoId,
//                 // 'VendorId': vendorId,
//                 // 'OfferType': offerType,
//                 // 'StartDate': startDate,
//                 // 'EndDate': endDate,
//                 // 'StartTimeSlots': startTimeSlots,
//                 // 'EndTimeSlots': endTimeSlots,
//                 // 'Description': description,
//                 // 'UnitPrice': unitPrice,
//                 // 'Title': title,
//                 // 'ImgUrl': imgUrl
//             }
//         });
//     },

    
// }