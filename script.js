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
    currentWeather(response);
    fivedayForecast(response);
    searchedCities();
  });
});

function searchedCities() {
  var cityList = $("<li>").addClass("list-group-item").text(city);
  $(".list").append(cityList);
}

function currentWeather(response) {
  // Converting the temp from the api call to fahrenheit
  var temperature = (response.main.temp - 273.15) * 1.8 + 32;
  temperature = Math.floor(temperature);

  $("#current-city").empty();

  // Manipulating the DOM
  var card = $("<div>").addClass("card");
  var cardBody = $("<div>").addClass("card-body");
  var cityName = $("<h3>").addClass("card-title").text(response.name);
  var currentDate = $("<h3>")
    .addClass("cart-title")
    .text(date.toLocaleDateString("en-US"));
  var temp = $("<p>")
    .addClass("card-text current-temp")
    .text("Temperature: " + temperature + " °F");
  var wind = $("<p>")
    .addClass("card-text wind-speed")
    .text("Wind Speed: " + " MPH");
  var humidity = $("<p>")
    .addClass("card-text humidity")
    .text("Humidity: " + response.main.humidity + "%");
  var icon = $("<img>").attr(
    "src",
    "https://openweathermap.org/img/w" + response.weather[0].icon + ".png"
  );

  city.append(currentDate, icon);
  cardBody.append(cityName, temp, wind, humidity);
  card.append(cardBody);
  $("#current-city").append(card);
}
