exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const weekday = new Date();

    const options = {
        weekday: "long"
    }

    return weekday.toLocaleDateString("en-US", options);
}