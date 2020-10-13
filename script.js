$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchBar = $("search-bar").val();
    $("#search-bar").val("");
    getForecast(searchBar);
  });

  //   Making a list to show search history
  function searchHistory() {
    var listItem = $("<li>").addClass("list-group-item").text(text);
    $(".history").append(listItem);
  }

  //   Making the ajax call to get current conditions
  function currentWeather() {
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchBar +
        "&appid=84d50c53f3586240f1958d7f0775cb40",
      type: "GET",
    }).then(function (callResponse) {
      console.log(callResponse);
    });
  }
});
