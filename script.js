// Storing the value of the search term as a variable
var city = $("#search-bar").val();

// Storing the openweather api key as a variable
var api = "&appid=84d50c53f3586240f1958d7f0775cb40";

var date = new Date();

$("#search-bar").on("click", function () {
  // Clear the search bar
  $("search-bar").val("");
  // Show the forecast div
  $("#forecast").addClass("show");
  city = $("search-bar").val();

  // Using ajax to make api call for current weather query
  $.ajax({
    url: "api.openweathermap.org/data/2.5/weather?q" + city + api,
    method: "GET",
  }).then(function (response) {
    // Converting the temp from the api call to fahrenheit
    var temperature = (response.main.temp - 273.15) * 1.8 + 32;
    console.log(Math.floor(temperature));
    temperature = Math.floor(temperature);
  });
});
