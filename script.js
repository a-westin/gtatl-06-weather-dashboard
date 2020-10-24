// Storing the value of the search term as a variable
var city = $("#search-bar").val();

// Storing the openweather api key as a variable
// var api = "&appid=f5e57f73950c9288e279fbd41a016f88";

var date = new Date();

$("#search-button").on("click", function () {
  // Clear the search bar
  $("search-bar").val("");
  // Show the forecast div
  $("#forecast").addClass("show");
  city = $("search-bar").val();
  $("search-bar").val("");

  // Using ajax to make api call for current weather query
  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=f5e57f73950c9288e279fbd41a016f88",
    method: "GET",
  }).then(function (response) {
    currentWeather(response);
    fivedayForecast(response);
    searchedCities();
  });
});

// function searchedCities() {
//   var cityList = $("<li>").addClass("list-group-item").text(city);
//   $(".list").append(cityList);
// }

// function currentWeather(response) {
//   // Converting the temp from the api call to fahrenheit
//   var temperature = (response.main.temp - 273.15) * 1.8 + 32;
//   temperature = Math.floor(temperature);

//   $("#current-city").empty();

//   // Manipulating the DOM
//   var card = $("<div>").addClass("card");
//   var cardBody = $("<div>").addClass("card-body");
//   var cityName = $("<h3>").addClass("card-title").text(response.name);
//   var currentDate = $("<h3>")
//     .addClass("cart-title")
//     .text(date.toLocaleDateString("en-US"));
//   var temp = $("<p>")
//     .addClass("card-text current-temp")
//     .text("Temperature: " + temperature + " °F");
//   var wind = $("<p>")
//     .addClass("card-text wind-speed")
//     .text("Wind Speed: " + " MPH");
//   var humidity = $("<p>")
//     .addClass("card-text humidity")
//     .text("Humidity: " + response.main.humidity + "%");
//   var icon = $("<img>").attr(
//     "src",
//     "https://openweathermap.org/img/w" + response.weather[0].icon + ".png"
//   );

//   city.append(currentDate, icon);
//   cardBody.append(cityName, temp, wind, humidity);
//   card.append(cardBody);
//   $("#current-city").append(card);
// }

// function fivedayForecast() {
//   $.ajax({
//     url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + api,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//     $("#forecast").empty();

//     var callResponse = response.list;
//     console.log(callResponse);
//   });
// }
