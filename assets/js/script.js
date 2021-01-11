// get current date add to header
var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDay);

$(document).ready(function() {

// when save button is clicked
$(".saveBtn").on("click", function() {

var descriptionTime = $(this).parent().attr("id");
var descriptionInfo = $(this).siblings(".description").val();

localStorage.setItem(descriptionTime, descriptionInfo);
})


function getTime() {     

var currentTime = moment().hour();


$(".time-block").each(function() {
var rowTime = parseInt($(this).attr("id").split("zone-")[1]);

if(rowTime > currentTime) {
$(this).removeClass("present");
$(this).removeClass("past");
$(this).addClass("future");
}

else if(rowTime === currentTime) {
$(this).removeClass("future");
$(this).removeClass("past");
$(this).addClass("present");
}

else {
$(this).removeClass("future");
$(this).removeClass("present");
$(this).addClass("past");
}})}

getTime();
})


// add persistence
$("#zone-Nine .description").val(localStorage.getItem("zone-Nine"));
$("#zone-Ten .description").val(localStorage.getItem("zone-Ten"));
$("#zone-Eleven .description").val(localStorage.getItem("zone-Eleven"));
$("#zone-Twelve .description").val(localStorage.getItem("zone-Twelve"));
$("#zone-Thirteen .description").val(localStorage.getItem("zone-Thirteen"));
$("#zone-Fourteen .description").val(localStorage.getItem("zone-Fourteen"));
$("#zone-Fifteen .description").val(localStorage.getItem("zone-Fifteen"));
$("#zone-Sixteen .description").val(localStorage.getItem("zone-Sixteen"));
$("#zone-Seventeen .description").val(localStorage.getItem("zone-Seventeen"));
