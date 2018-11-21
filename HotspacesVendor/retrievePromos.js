exports.handler = function(event, context, callback) {
    
    let date = event.date;
    
    console.log(date);

    callback(null, {"message": "Successfully executed"});
}