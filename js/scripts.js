
// Front-End Logic

$(function() {
  $("form#personal").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var movie = $("select#fav-mov").val();

    if (age > 14 && movie === 'casablanca' && gender === 'female') {
      $("#steve").show();

    } else {
        alert('Please enter your age before your true love will display.');
    }

    if (age < 14) {
      $("#taylor").show();
    }

    if (movie === 'starwars' || movie === 'schindler') {
      $("#kanye").show();
    }


  event.preventDefault();
  });
});
