var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const d = new Date(today);
let day = d.getDay();

if (day==0) {
    dayname = "Sunday, ruled by the Sun";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
    var img = document.createElement("img");
        img.src = "gifs/giphy-3.gif";
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==1) {
    dayname = "Monday, ruled by the Moon";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
    var img = document.createElement("img");
        img.src = "gifs/giphy.gif";
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==2) {
    dayname = "Tuesday, ruled by Mars";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
    var img = document.createElement("img");
        img.src = "gifs/mars-planet.gif";
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==3) {
    dayname = "Wednesday, ruled by Mercury";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
    var img = document.createElement("img");
        img.src = "gifs/Owne.gif";
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==4) {
    dayname = "Thursday, ruled by Jupiter";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
        var img = document.createElement("img");
        img.src = "gifs/giphy-2.gif";
        img.height=200;
        img.width=100;
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==5) {
    dayname = "Friday, ruled by Venus";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
        var img = document.createElement("img");
        img.src = "gifs/giphy-1.gif";
    // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==6) {
    dayname = "Saturday, ruled by Saturn";
    document.write("<font color=\"white\">"+today+"\n")
    document.write("<font color=\"white\">"+"Today is " + dayname);
    var img = document.createElement("img");
        img.src = "gifs/b1d123eb-d97a-4001-81cf-61596730f9e5.gif";
    // This next line will just add it to the <body> tag
        document.body.appendChild(img);


  }
