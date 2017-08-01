var apiKey = "c7aeca75879e7fdbf95e5e618c83aef2";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response){
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
     })

     .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
