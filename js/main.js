var pcsdEndDate = new Date("2023-06-05 15:40")

setInterval(function() {
  if (document.getElementById("pcsdWeekendCheck").checked == true) {
    var finalTime = calculateTime(pcsdEndDate, true);

    document.getElementById("pcsdTime").innerHTML = finalTime;
  } else {
    var finalTime = calculateTime(pcsdEndDate, false);

    document.getElementById("pcsdTime").innerHTML = finalTime;
  }

  var timeInput = document.getElementById("customDate").value;
  
  if (timeInput) {
    var customEndDate = new Date(timeInput);

    if (document.getElementById("customWeekendCheck").checked == true) {
      var finalTime = calculateTime(customEndDate, true);
  
      document.getElementById("customTime").innerHTML = finalTime;
    } else {
      var finalTime = calculateTime(customEndDate, false);
  
      document.getElementById("customTime").innerHTML = finalTime;
    }
  } else {
    document.getElementById("customTime").innerHTML = "00:00:00:00";
  }
}, 1000);

function calculateTime(endDate, includeWeekends) {
  var timeNow = new Date()
  var timeLeft = (endDate.getTime() - timeNow.getTime());

  var days
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (includeWeekends) {
    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  } else {
    days = calculateWeekdays(timeNow, endDate)
  }

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

  return (formattedDays + ":" + formattedHours + ":" + formattedMins + ":" + formattedSecs);
}

function calculateWeekdays(preStartDate, preEndDate) {
  var startDate = new Date(preStartDate);
  var endDate = new Date(preEndDate);

  var millisecondsPerDay = 86400 * 1000;

  startDate.setHours(0, 0, 0, 1);
  endDate.setHours(23, 59, 59, 999);

  var difference = endDate - startDate;
  var days = Math.ceil(difference / millisecondsPerDay);

  var weeks = Math.floor(days / 7);
  days -= weeks * 2;

  var startDay = startDate.getDay();
  var endDay = endDate.getDay();

  if (startDay - endDay > 1) {
    days -= 2;
  }

  if (startDay == 0 && endDay != 6) {
    days--;  
  }

  if (endDay == 6 && startDay != 0) {
    days--;
  }

  return days;
};
