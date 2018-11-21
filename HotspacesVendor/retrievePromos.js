exports.handler = function(event, context, callback) {
    
    let timestamp = Math.round((new Date()).getTime() / 1000);;
    console.log(timestamp);

    callback(null, {"message": "Successfully executed"});
}