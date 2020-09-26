$(document).ready(function () {
    console.log(moment());
    console.log(moment().format());
    
    
    
    //$("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    
    let updateDate = function () {
    let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#currentDay").text(currentDate)
    // console.log(currentDate)
    }


    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }



    
















    setInterval(updateTime, 1000);
    setInterval(updateDate, 1000);






})