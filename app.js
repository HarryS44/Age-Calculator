const dayInput = $("#day");
const monthInput = $("#month");
const yearInput = $("#year");
const date = new Date();
day.on("input", testFunction());
year.on("input", testFunction());
month.on("input", testFunction());

function testFunction() {  const day = dayInput.val();
  const month = monthInput.val();
  const year = yearInput.val();



  $("#show-days").text(day);
}

// $("#show-days").text(day);
// $("#show-months").text((date.getMonth() + 1) - month);
// $("#show-years").text(date.getFullYear() - year - 1);
