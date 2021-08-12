$(document).ready(function() {
  $("#age").submit(function(event) {
    event.preventDefault();
    $("#ofAge").hide();
    $("#minor").hide();
    $("#warning").hide();
    const age = parseInt($("#ageInput").val());
    if (isNaN(age)) {
      $("#warning").show();
    } else if (age < 18) {
      $("#minor").show();
    } else {
      $("#ofAge").show();
    }
  });
});