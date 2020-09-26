let schedule = {
    dateToday : moment().format("YYYY-MM-DD"),
    saveEntries : []
}


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
    let timeInputBoxes = []
    timeInputBoxes [0] = $("#timeNine");
    timeInputBoxes [1] = $("#timeTen");
    timeInputBoxes [2] = $("#timeEleven");
    timeInputBoxes [3] = $("#timeTwelve");
    timeInputBoxes [4] = $("#timeOne");
    timeInputBoxes [5] = $("#timeTwo");
    timeInputBoxes [6] = $("#timeThree");
    timeInputBoxes [7] = $("#timeFour");
    timeInputBoxes [8] = $("#timeFive");
    function updateColorBackground () {
        //let timeInputBoxes = []
        let todayHours = moment().hour();
        // timeInputBoxes [0] = $("#timeNine");
        // timeInputBoxes [1] = $("#timeTen");
        // timeInputBoxes [2] = $("#timeEleven");
        // timeInputBoxes [3] = $("#timeTwelve");
        // timeInputBoxes [4] = $("#timeOne");
        // timeInputBoxes [5] = $("#timeTwo");
        // timeInputBoxes [6] = $("#timeThree");
        // timeInputBoxes [7] = $("#timeFour");
        // timeInputBoxes [8] = $("#timeFive");
        for (let i =0; i < timeInputBoxes.length; i++) {
            timeInputBoxes [i].removeClass("present");
            timeInputBoxes [i].removeClass("past");
            timeInputBoxes [i].removeClass("future");
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

    $("#saveBtn9").on("click", saveEntries);
    $("#saveBtn10").on("click", saveEntries);
    $("#saveBtn11").on("click", saveEntries);
    $("#saveBtn12").on("click", saveEntries);
    $("#saveBtn1").on("click", saveEntries);
    $("#saveBtn2").on("click", saveEntries);
    $("#saveBtn3").on("click", saveEntries);
    $("#saveBtn4").on("click", saveEntries);
    $("#saveBtn5").on("click", saveEntries);
    function saveEntries () {
        for (let i =0; i < timeInputBoxes.length; i++) {
        schedule.saveEntries[i] = timeInputBoxes[i].val();
        }
        localStorage.setItem("scheduleStorage", JSON.stringify(schedule));
    }
    function loadEntries () {
        let todayString = moment().format("YYYY-MM-DD");
        let scheduleObject = localStorage.getItem("scheduleStorage");
        if (scheduleObject) {
            let tempSchedule = JSON.parse(scheduleObject);
            if (tempSchedule.dateToday == todayString) {
                schedule = tempSchedule;
            }
        }
        for (let i =0; i < timeInputBoxes.length; i++) {
            timeInputBoxes[i].val(schedule.saveEntries[i]);
        }
    }
    loadEntries()


    setInterval(updateColorBackground, 15000);
    setInterval(updateTime, 1000);
    setInterval(updateDate, 1000);

})