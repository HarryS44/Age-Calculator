const formData = $("#form-data");
const dayInput = $("#day");
const monthInput = $("#month");
const yearInput = $("#year");
const submitBtn = $("#submit-btn");

function checkForm(){
        if (dayInput.val() && monthInput.val() && yearInput.val()) {
          submitBtn.prop('disabled', false);
        } else {
          submitBtn.prop('disabled', true);
        }
}

dayInput.on('input', checkForm);
monthInput.on('input', checkForm);
yearInput.on('input', checkForm);

$('#form-data').submit(function(event) {
    event.preventDefault(); 
    
  
    var day = dayInput.val();
    var month = monthInput.val();
    var year = yearInput.val();
    
    console.log('Day:', day);
    console.log('Month:', month);
    console.log('Year:', year);
    
    // You can now use the retrieved data as needed
    // For example, you can perform further actions or update the UI
  });
