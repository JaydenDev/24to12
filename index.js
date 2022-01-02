// Credit to mybearworld for the code
function twentyfour2twelve() {
    hr24 = document.getElementById("inputbox").value;
    hr24 % 12 ? (hr24 < 13 ? [hr24, "am"] : [hr24 - 12, "pm"]) : (hr24 == 12 ? [12, "pm"] : [12, "am"]);
    document.getElementById("span").innerText = hr24 % 12 ? (hr24 < 13 ? [hr24, "am "] : [hr24 - 12, "pm "]) : (hr24 == 12 ? [12, "pm "] : [12, "am "]);
}

function getTimeTwelve() {
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();

    var year = date.getFullYear();
    var month = date.getMonth(); // beware: January = 0; February = 1, etc.
    var day = date.getDate();

    var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
    var milliSeconds = date.getMilliseconds();
    hr24 = date.getHours();
    hour12 = hr24 % 12 ? (hr24 < 13 ? [hr24, "am"] : [hr24 - 12, "pm"]) : (hr24 == 12 ? [12, "pm"] : [12, "am"]);
    document.getElementById("time12").innerText = (hour12 + ":" + minutes + ":" + seconds)
}
