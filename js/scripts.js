
// Front-End Logic

$(function() {
  $("form#personal").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var movie = $("select#fav-mov").val();

    if (age > 14 && movie === 'casablanca' && gender === 'female') {
      $("#steve").show();
    }

  event.preventDefault();
  });
});
