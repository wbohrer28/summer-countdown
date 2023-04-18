var pcsdEndDate = new Date("2023-06-05 15:40").getTime();

var pcsdResetTime = setInterval(function() {
    var timeNow = new Date().getTime();
    var timeLeft = (pcsdEndDate - timeNow);

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    var formattedDays = days.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    var formattedHours = hours.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    var formattedMins = mins.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
    var formattedSecs = secs.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    document.getElementById("pcsdTime").innerHTML = (formattedDays + ":" + formattedHours + ":" + formattedMins + ":" + formattedSecs);
}, 1000);

var customResetTime = setInterval(function() {
    var input = document.getElementById("customDate").value;
    var endDate = new Date(input).getTime();

    if (endDate) {
        var timeNow = new Date().getTime();
        var timeLeft = (endDate - timeNow);
        var nowDate = new Date(timeNow).getDate();
    
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        var formattedDays = days.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        var formattedHours = hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        var formattedMins = mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        var formattedSecs = secs.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });

        var finalTime = (formattedDays + ":" + formattedHours + ":" + formattedMins + ":" + formattedSecs)
    
        document.getElementById("customTime").innerHTML = (finalTime);
    } else {
        document.getElementById("customTime").innerHTML = ("00:00:00:00");
    };
}, 1000);