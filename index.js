function twentyfour2twelve() {
    hr24 = document.getElementById("inputbox").value;
    hr24%12 ? (hr24<13 ? [hr24, "am"] : [hr24-12, "pm"]) : (hr24==12 ? [12, "pm"] : [12, "am"]);
    document.getElementById("span").innerText = hr24 % 12 ? (hr24<13 ? [hr24 , "am "] : [hr24-12 , "pm "]) : (hr24==12 ? [12 , "pm "] : [12 , "am "]);
}