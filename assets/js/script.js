const searchCityEl = document.querySelector("#searchCity");
const searchButtonEl = document.querySelector("#searchButton");
const todayEl = document.querySelector("#today");
const searchHistoryEl = document.querySelector("#searchHistory");
const dayOneOfFive = document.querySelector("#fiveDayOne");
const dayTwoOfFive = document.querySelector("#fiveDayTwo");
const dayThreeOfFive = document.querySelector("#fiveDayThree");
const dayFourOfFive = document.querySelector("#fiveDayFour");
const dayFiveOfFive = document.querySelector("#fiveDayFive");
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCityEl.value}&appid={14f0c64f1a5ced7598c652866b9b0850}`;
console.log(searchCityEl);

function handleSearch(event) {
  event.preventDefault();
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchButtonEl.addEventListener("click", handleSearch);
