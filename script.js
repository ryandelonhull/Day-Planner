$(document).ready(function () {
    console.log(moment());
    console.log(moment().format());

    //$("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    let updateDate = function () {
    let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDate);
    // console.log(currentDate);
    }
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss');
        $("#time").text(currentTime);
    }

    function updateColorBackground () {
        let timeInputBoxes = []
        let todayHours = moment().hour();
        timeInputBoxes [0] = $("#timeNine");
        timeInputBoxes [1] = $("#timeTen");
        timeInputBoxes [2] = $("#timeEleven");
        timeInputBoxes [3] = $("#timeTwelve");
        timeInputBoxes [4] = $("#timeOne");
        timeInputBoxes [5] = $("#timeTwo");
        timeInputBoxes [6] = $("#timeThree");
        timeInputBoxes [7] = $("#timeFour");
        timeInputBoxes [8] = $("#timeFive");
        for (let i =0; i < timeInputBoxes.length; i++) {
            if (todayHours == i + 9) {
                timeInputBoxes [i].addClass("present");
            } else if (todayHours > i + 9) {
                timeInputBoxes [i].addClass("past");
            } else {
                timeInputBoxes [i].addClass("future");
            }
        } 
        
    } 
    updateColorBackground ();

    
















    setInterval(updateTime, 1000);
    setInterval(updateDate, 1000);

})