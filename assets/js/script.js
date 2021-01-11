// get current date/time, add to header
var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDay);
var currentTime = moment().hour();
console.log(currentTime);


//  console.log(currentDay);
//var descriptionTime = moment().format('LT');



function getTime() {}     


$(document).ready(function() {

// get description input, save to local storage
$(".saveBtn").on("click", function() {
console.log("save button was clicked");
var descriptionTime = $(this).parent().attr("id");
var descriptionInfo = $(this).siblings(".textarea").val();
localStorage.setItem(descriptionTime, descriptionInfo);
})

$(".time-block").each(function() {
var rowTime = parseInt($(this).attr("id").split("block-"[1]));

if(rowTime > currentTime) {
$("textarea").addClass("future");
$("textarea").removeClass("present");
$("textarea").removeClass("past");
}

else if(rowTime === currentTime) {
$("textarea").removeClass("future");
$("textarea").addClass("present");
$("textarea").removeClass("past");
}
else {
$("textarea").removeClass("future");
$("textarea").removeClass("present");
$("textarea").addClass("past");
}
getTime();


})



})

// add persistence
$("#timeNine. textarea").val(localStorage.getItem("timeNine"));
$("#timeTen. textarea").val(localStorage.getItem("timeTen"));
$("#timeEleven. textarea").val(localStorage.getItem("timeEleven"));
$("#timeTwelve. textarea").val(localStorage.getItem("timeTwelve"));
$("#timeThirteen. textarea").val(localStorage.getItem("timeThirteen"));
$("#timeFourteen. textarea").val(localStorage.getItem("timeFourteen"));
$("#timeFifteen. textarea").val(localStorage.getItem("timeFifteen"));
$("#timeSixteen. textarea").val(localStorage.getItem("timeSixteen"));
$("#timeSeventeen. textarea").val(localStorage.getItem("timeSeventeen"));
