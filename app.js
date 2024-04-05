$("#day").on("input", testFunction);
$("#month").on("input", testFunction);
$("#year").on("input", testFunction);

function testFunction() {
  // Get the day, month, and year values from the input fields
  const day = parseInt($("#day").val());
  const month = parseInt($("#month").val());
  const year = parseInt($("#year").val());

  // Get the current date
  const currentDate = new Date();

  // Check if the input values are valid
  if (day <= 31 && month <= 12 && year <= currentDate.getFullYear()) {
    // Create a Date object with the user's birthdate
    const birthday = new Date(year, month - 1, day);

    // Calculate the user's age in years
    const years = currentDate.getFullYear() - birthday.getFullYear();

    // Calculate the number of months since the user's last birthday
    const months = currentDate.getMonth() - birthday.getMonth();

    // Calculate the number of days since the user's last birthday
    const days = currentDate.getDate() - birthday.getDate();

    // Display the calculated age, months, and days
    $("#show-years").text(years);
    $("#show-months").text(months);
    $("#show-days").text(days);
  } else {
    // If the input values are invalid, display an error message
    if (day > 31) {
      error($("#day"));
      $("#show-days").text("- -");
    }
    if (month > 12) {
      error($("#month"));
      $("#show-months").text("- -");
    }
    if (year > currentDate.getFullYear()) {
      error($("#year"));
      $("#show-years").text("- -");
    }
  }
}

function error(input) {
  input.addClass("input-red-box");
  input.parent().find(".error-message").removeClass("hidden");
  setTimeout(function () {
    input.removeClass("input-red-box");
    input.parent().find(".error-message").addClass("hidden");
  }, 1000);
}
