const date = new Date();

$("#day").on("input", testFunction);
$("#month").on("input", testFunction);
$("#year").on("input", testFunction);

function error(input) {
  input.addClass("input-red-box");
  input.parent().find(".error-message").removeClass("hidden");
  setTimeout(function () {
    input.removeClass("input-red-box");
    input.parent().find(".error-message").addClass("hidden");
  }, 1000);
}

function testFunction() {
  const day = parseInt($("#day").val());
  const month = parseInt($("#month").val());
  const year = parseInt($("#year").val());

  if (day <= 31) {
    $("#show-days").text(day + date.getDate());
  } else {
    error($("#day"));
    $("#show-days").text("- -");
  }

  if (month <= 12) {
    $("#show-months").text(month - (date.getMonth() + 1));
  } else {
    error($("#month"));
    $("#show-months").text("- -");
  }

  const currentYear = new Date().getFullYear();
  if (year <= currentYear) {
    $("#show-years").text(date.getFullYear() - year);
  } else {
    error($("#year"));
    $("#show-years").text("- -");
  }
}


