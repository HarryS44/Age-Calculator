const formData = $("#form-data");
const dayInput = $("#day");
const monthInput = $("#month");
const yearInput = $("#year");
const submitBtn = $("#submit-btn");
  const date = new Date();
function checkForm() {
  if (dayInput.val() && monthInput.val() && yearInput.val()) {
    submitBtn.prop("disabled", false);
  } else {
    submitBtn.prop("disabled", true);
  }
}

dayInput.on("input", checkForm);
monthInput.on("input", checkForm);
yearInput.on("input", checkForm);

$("#form-data").submit(function (event) {

  event.preventDefault();

  const day = dayInput.val();
  const month = monthInput.val();
  const year = yearInput.val();

  $("#show-days").text(day);
  $("#show-months").text((date.getMonth() + 1) - month);
  $("#show-years").text(date.getFullYear() - year);
});
