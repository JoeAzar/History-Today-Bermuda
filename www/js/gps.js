function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 1000; // Distance in m
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

//-----------------------------------------------

function onError(error) {
    alert("couldn't get location");
}

function getDistFromCurrentLocation(lat, long, callback) {
    var func = function (position) {
        callback(getDistance(position.coords.latitude, position.coords.longitude, lat, long).toFixed(1));
    };
    navigator.geolocation.getCurrentPosition(func, onError);
}

/*var onSuccess = function (position) {
    $('#disp').html("Distance from current location to Sue B: <span class='blue-text'>" + getDistance(position.coords.latitude, position.coords.longitude, 43.129882, -77.626714) + "</span> meters.");
};

var checkLocation = function (position) {
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
    if (getDistance(position.coords.latitude, position.coords.longitude, 43.129882, -77.626714) < 30) {
        $('#disp').html('You have arrived!');
        navigator.geolocation.clearWatch(watchID);
    } else
        onSuccess(position);
};

function initContTracking() {
    var watchID = navigator.geolocation.watchPosition(checkLocation, onError, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    });
}*/