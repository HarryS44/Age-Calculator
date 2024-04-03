const dayInput = $("#day");
const monthInput = $("#month");
const yearInput = $("#year");
const date = new Date();

$("#day").on("input", testFunction);
$("#month").on("input", testFunction);
$("#year").on("input", testFunction);

function error() {
  $("#error-message").removeClass("hidden");
  setTimeout(function () {
    $("#error-message").addClass("hidden");
  }, 1000);
}

function testFunction() {
  const day = dayInput.val();
  const month = monthInput.val();
  const year = yearInput.val();

  if (day <= 31) {
    $("#show-days").text(day);
  } else {
    error();
  }

  if (month <= 12) {
    $("#show-years").text(year);
  } else {
    error();
  }

  $("#show-months").text(month);
  $("#show-years").text(year);
}

// $("#show-days").text(day);
// $("#show-months").text((date.getMonth() + 1) - month);
// $("#show-years").text(date.getFullYear() - year - 1);
