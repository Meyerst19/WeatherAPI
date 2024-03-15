const searchCityEl = document.querySelector("#searchCity");
const searchButtonEl = document.querySelector("#searchButton");
const todayEl = document.querySelector("#today");
const searchHistoryEl = document.querySelector("#searchHistory");
const dayOneOfFive = document.querySelector("#fiveDayOne");
const dayTwoOfFive = document.querySelector("#fiveDayTwo");
const dayThreeOfFive = document.querySelector("#fiveDayThree");
const dayFourOfFive = document.querySelector("#fiveDayFour");
const dayFiveOfFive = document.querySelector("#fiveDayFive");

// let cities = [];

if (localStorage.getItem("cities") !== null) {
  cities = JSON.parse(localStorage.getItem("cities"));
}

console.log(cities);

function handleHistorySearch(event) {
  console.log(event.target.id);
  forcast(event.target.id);
}

function displayStoredCities() {
  searchHistoryEl.textContent = "";
  for (i = 0; i < cities.length; i++) {
    console.log(cities);
    const historyEl = document.createElement("button");
    historyEl.textContent = cities[i];
    historyEl.setAttribute("class", "btn btn-outline-info city");
    historyEl.setAttribute("id", `${cities[i]}`);
    searchHistoryEl.appendChild(historyEl);
    historyEl.addEventListener("click", handleHistorySearch);
  }
}

function tempConversion(tempKelvin) {
  const convertedTemp = Math.round(
    ((Number(tempKelvin) - 273.15) * 9) / 5 + 32
  );
  return convertedTemp;
}

function windSpeedConversion(speedMps) {
  const convertedSpeed = Math.round(Number(speedMps) * 223.7) / 100;
  return convertedSpeed;
}

function dateFormatted(date) {
  const dateFormat = `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(
    0,
    4
  )}`;
  return dateFormat;
}

function storeSearchHistory(city) {
  if (JSON.parse(localStorage.getItem("cities")) !== null) {
    const cities = JSON.parse(localStorage.getItem("cities"));
    console.log(cities);
    cities.push(city);
  } else {
    const cities = [];
    cities.push(city);
    console.log(cities);
  }
  console.log(cities);
  // for (i = 0; i < cities.length; i++) {
  //   const historyEl = document.createElement("button");
  //   historyEl.textContent = cities[i];
  //   searchHistoryEl.textContent = "";
  //   searchHistoryEl.appendChild(historyEl);
  // }

  localStorage.setItem("cities", JSON.stringify(cities));
}

function forcast(citySearch) {
  city = citySearch;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=14f0c64f1a5ced7598c652866b9b0850`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const todayIcon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
      const todayDate = dateFormatted(data.list[0].dt_txt);
      const todayCityDateEl = document.createElement("h2");
      const todayImgEl = document.createElement("img");
      const todayTempEl = document.createElement("p");
      const todayWindEl = document.createElement("p");
      const todayHumidityEl = document.createElement("p");

      const dayOneOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`;
      const dayOneOfFiveDate = dateFormatted(data.list[7].dt_txt);
      const dayOneOfFiveDateEl = document.createElement("h3");
      const dayOneOfFiveImgEl = document.createElement("img");
      const dayOneOfFiveTempEl = document.createElement("p");
      const dayOneOfFiveWindEl = document.createElement("p");
      const dayOneOfFiveHumidityEl = document.createElement("p");

      const dayTwoOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`;
      const dayTwoOfFiveDate = dateFormatted(data.list[15].dt_txt);
      const dayTwoOfFiveDateEl = document.createElement("h3");
      const dayTwoOfFiveImgEl = document.createElement("img");
      const dayTwoOfFiveTempEl = document.createElement("p");
      const dayTwoOfFiveWindEl = document.createElement("p");
      const dayTwoOfFiveHumidityEl = document.createElement("p");

      const dayThreeOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`;
      const dayThreeOfFiveDate = dateFormatted(data.list[23].dt_txt);
      const dayThreeOfFiveDateEl = document.createElement("h3");
      const dayThreeOfFiveImgEl = document.createElement("img");
      const dayThreeOfFiveTempEl = document.createElement("p");
      const dayThreeOfFiveWindEl = document.createElement("p");
      const dayThreeOfFiveHumidityEl = document.createElement("p");

      const dayFourOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`;
      const dayFourOfFiveDate = dateFormatted(data.list[31].dt_txt);
      const dayFourOfFiveDateEl = document.createElement("h3");
      const dayFourOfFiveImgEl = document.createElement("img");
      const dayFourOfFiveTempEl = document.createElement("p");
      const dayFourOfFiveWindEl = document.createElement("p");
      const dayFourOfFiveHumidityEl = document.createElement("p");

      const dayFiveOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
      const dayFiveOfFiveDate = dateFormatted(data.list[39].dt_txt);
      const dayFiveOfFiveDateEl = document.createElement("h3");
      const dayFiveOfFiveImgEl = document.createElement("img");
      const dayFiveOfFiveTempEl = document.createElement("p");
      const dayFiveOfFiveWindEl = document.createElement("p");
      const dayFiveOfFiveHumidityEl = document.createElement("p");

      todayCityDateEl.textContent = `${data.city.name} ${todayDate}`;
      todayImgEl.setAttribute("src", todayIcon);
      todayTempEl.textContent = `Temp: ${tempConversion(
        data.list[0].main.temp
      )}°F`;
      todayWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[0].wind.speed
      )} MPH`;
      todayHumidityEl.textContent = `Humidity: ${data.list[0].main.humidity}%`;

      dayOneOfFiveDateEl.textContent = dayOneOfFiveDate;
      dayOneOfFiveImgEl.setAttribute("src", dayOneOfFiveIcon);
      dayOneOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[7].main.temp
      )}°F`;
      dayOneOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[7].wind.speed
      )} MPH`;
      dayOneOfFiveHumidityEl.textContent = `Humidity: ${data.list[7].main.humidity}%`;

      dayTwoOfFiveDateEl.textContent = dayTwoOfFiveDate;
      dayTwoOfFiveImgEl.setAttribute("src", dayTwoOfFiveIcon);
      dayTwoOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[15].main.temp
      )}°F`;
      dayTwoOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[15].wind.speed
      )} MPH`;
      dayTwoOfFiveHumidityEl.textContent = `Humidity: ${data.list[15].main.humidity}%`;

      dayThreeOfFiveDateEl.textContent = dayThreeOfFiveDate;
      dayThreeOfFiveImgEl.setAttribute("src", dayThreeOfFiveIcon);
      dayThreeOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[23].main.temp
      )}°F`;
      dayThreeOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[23].wind.speed
      )} MPH`;
      dayThreeOfFiveHumidityEl.textContent = `Humidity: ${data.list[23].main.humidity}%`;

      dayFourOfFiveDateEl.textContent = dayFourOfFiveDate;
      dayFourOfFiveImgEl.setAttribute("src", dayFourOfFiveIcon);
      dayFourOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[31].main.temp
      )}°F`;
      dayFourOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[31].wind.speed
      )} MPH`;
      dayFourOfFiveHumidityEl.textContent = `Humidity: ${data.list[31].main.humidity}%`;

      dayFiveOfFiveDateEl.textContent = dayFiveOfFiveDate;
      dayFiveOfFiveImgEl.setAttribute("src", dayFiveOfFiveIcon);
      dayFiveOfFiveTempEl.textContent = `Temp: ${tempConversion(
        data.list[39].main.temp
      )}°F`;
      dayFiveOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
        data.list[39].wind.speed
      )} MPH`;
      dayFiveOfFiveHumidityEl.textContent = `Humidity: ${data.list[39].main.humidity}%`;

      todayEl.textContent = "";
      todayEl.appendChild(todayCityDateEl);
      todayEl.appendChild(todayImgEl);
      todayEl.appendChild(todayTempEl);
      todayEl.appendChild(todayWindEl);
      todayEl.appendChild(todayHumidityEl);

      dayOneOfFive.textContent = "";
      dayOneOfFive.appendChild(dayOneOfFiveDateEl);
      dayOneOfFive.appendChild(dayOneOfFiveImgEl);
      dayOneOfFive.appendChild(dayOneOfFiveTempEl);
      dayOneOfFive.appendChild(dayOneOfFiveWindEl);
      dayOneOfFive.appendChild(dayOneOfFiveHumidityEl);

      dayTwoOfFive.textContent = "";
      dayTwoOfFive.appendChild(dayTwoOfFiveDateEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveImgEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveTempEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveWindEl);
      dayTwoOfFive.appendChild(dayTwoOfFiveHumidityEl);

      dayThreeOfFive.textContent = "";
      dayThreeOfFive.appendChild(dayThreeOfFiveDateEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveImgEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveTempEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveWindEl);
      dayThreeOfFive.appendChild(dayThreeOfFiveHumidityEl);

      dayFourOfFive.textContent = "";
      dayFourOfFive.appendChild(dayFourOfFiveDateEl);
      dayFourOfFive.appendChild(dayFourOfFiveImgEl);
      dayFourOfFive.appendChild(dayFourOfFiveTempEl);
      dayFourOfFive.appendChild(dayFourOfFiveWindEl);
      dayFourOfFive.appendChild(dayFourOfFiveHumidityEl);

      dayFiveOfFive.textContent = "";
      dayFiveOfFive.appendChild(dayFiveOfFiveDateEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveImgEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveTempEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveWindEl);
      dayFiveOfFive.appendChild(dayFiveOfFiveHumidityEl);
    });
  storeSearchHistory(city);
  displayStoredCities();
}

function handleSearch(event) {
  event.preventDefault();
  forcast(searchCityEl.value);

  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCityEl.value}&appid=14f0c64f1a5ced7598c652866b9b0850`;
  // fetch(url)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     const todayIcon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  //     const todayDate = dateFormatted(data.list[0].dt_txt);
  //     const todayCityDateEl = document.createElement("h2");
  //     const todayImgEl = document.createElement("img");
  //     const todayTempEl = document.createElement("p");
  //     const todayWindEl = document.createElement("p");
  //     const todayHumidityEl = document.createElement("p");

  //     const dayOneOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`;
  //     const dayOneOfFiveDate = dateFormatted(data.list[7].dt_txt);
  //     const dayOneOfFiveDateEl = document.createElement("h3");
  //     const dayOneOfFiveImgEl = document.createElement("img");
  //     const dayOneOfFiveTempEl = document.createElement("p");
  //     const dayOneOfFiveWindEl = document.createElement("p");
  //     const dayOneOfFiveHumidityEl = document.createElement("p");

  //     const dayTwoOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`;
  //     const dayTwoOfFiveDate = dateFormatted(data.list[15].dt_txt);
  //     const dayTwoOfFiveDateEl = document.createElement("h3");
  //     const dayTwoOfFiveImgEl = document.createElement("img");
  //     const dayTwoOfFiveTempEl = document.createElement("p");
  //     const dayTwoOfFiveWindEl = document.createElement("p");
  //     const dayTwoOfFiveHumidityEl = document.createElement("p");

  //     const dayThreeOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`;
  //     const dayThreeOfFiveDate = dateFormatted(data.list[23].dt_txt);
  //     const dayThreeOfFiveDateEl = document.createElement("h3");
  //     const dayThreeOfFiveImgEl = document.createElement("img");
  //     const dayThreeOfFiveTempEl = document.createElement("p");
  //     const dayThreeOfFiveWindEl = document.createElement("p");
  //     const dayThreeOfFiveHumidityEl = document.createElement("p");

  //     const dayFourOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`;
  //     const dayFourOfFiveDate = dateFormatted(data.list[31].dt_txt);
  //     const dayFourOfFiveDateEl = document.createElement("h3");
  //     const dayFourOfFiveImgEl = document.createElement("img");
  //     const dayFourOfFiveTempEl = document.createElement("p");
  //     const dayFourOfFiveWindEl = document.createElement("p");
  //     const dayFourOfFiveHumidityEl = document.createElement("p");

  //     const dayFiveOfFiveIcon = `https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
  //     const dayFiveOfFiveDate = dateFormatted(data.list[39].dt_txt);
  //     const dayFiveOfFiveDateEl = document.createElement("h3");
  //     const dayFiveOfFiveImgEl = document.createElement("img");
  //     const dayFiveOfFiveTempEl = document.createElement("p");
  //     const dayFiveOfFiveWindEl = document.createElement("p");
  //     const dayFiveOfFiveHumidityEl = document.createElement("p");

  //     todayCityDateEl.textContent = `${data.city.name} ${todayDate}`;
  //     todayImgEl.setAttribute("src", todayIcon);
  //     todayTempEl.textContent = `Temp: ${tempConversion(
  //       data.list[0].main.temp
  //     )}°F`;
  //     todayWindEl.textContent = `Wind: ${windSpeedConversion(
  //       data.list[0].wind.speed
  //     )} MPH`;
  //     todayHumidityEl.textContent = `Humidity: ${data.list[0].main.humidity}%`;

  //     dayOneOfFiveDateEl.textContent = dayOneOfFiveDate;
  //     dayOneOfFiveImgEl.setAttribute("src", dayOneOfFiveIcon);
  //     dayOneOfFiveTempEl.textContent = `Temp: ${tempConversion(
  //       data.list[7].main.temp
  //     )}°F`;
  //     dayOneOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
  //       data.list[7].wind.speed
  //     )} MPH`;
  //     dayOneOfFiveHumidityEl.textContent = `Humidity: ${data.list[7].main.humidity}%`;

  //     dayTwoOfFiveDateEl.textContent = dayTwoOfFiveDate;
  //     dayTwoOfFiveImgEl.setAttribute("src", dayTwoOfFiveIcon);
  //     dayTwoOfFiveTempEl.textContent = `Temp: ${tempConversion(
  //       data.list[15].main.temp
  //     )}°F`;
  //     dayTwoOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
  //       data.list[15].wind.speed
  //     )} MPH`;
  //     dayTwoOfFiveHumidityEl.textContent = `Humidity: ${data.list[15].main.humidity}%`;

  //     dayThreeOfFiveDateEl.textContent = dayThreeOfFiveDate;
  //     dayThreeOfFiveImgEl.setAttribute("src", dayThreeOfFiveIcon);
  //     dayThreeOfFiveTempEl.textContent = `Temp: ${tempConversion(
  //       data.list[23].main.temp
  //     )}°F`;
  //     dayThreeOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
  //       data.list[23].wind.speed
  //     )} MPH`;
  //     dayThreeOfFiveHumidityEl.textContent = `Humidity: ${data.list[23].main.humidity}%`;

  //     dayFourOfFiveDateEl.textContent = dayFourOfFiveDate;
  //     dayFourOfFiveImgEl.setAttribute("src", dayFourOfFiveIcon);
  //     dayFourOfFiveTempEl.textContent = `Temp: ${tempConversion(
  //       data.list[31].main.temp
  //     )}°F`;
  //     dayFourOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
  //       data.list[31].wind.speed
  //     )} MPH`;
  //     dayFourOfFiveHumidityEl.textContent = `Humidity: ${data.list[31].main.humidity}%`;

  //     dayFiveOfFiveDateEl.textContent = dayFiveOfFiveDate;
  //     dayFiveOfFiveImgEl.setAttribute("src", dayFiveOfFiveIcon);
  //     dayFiveOfFiveTempEl.textContent = `Temp: ${tempConversion(
  //       data.list[39].main.temp
  //     )}°F`;
  //     dayFiveOfFiveWindEl.textContent = `Wind: ${windSpeedConversion(
  //       data.list[39].wind.speed
  //     )} MPH`;
  //     dayFiveOfFiveHumidityEl.textContent = `Humidity: ${data.list[39].main.humidity}%`;

  //     todayEl.textContent = "";
  //     todayEl.appendChild(todayCityDateEl);
  //     todayEl.appendChild(todayImgEl);
  //     todayEl.appendChild(todayTempEl);
  //     todayEl.appendChild(todayWindEl);
  //     todayEl.appendChild(todayHumidityEl);

  //     dayOneOfFive.textContent = "";
  //     dayOneOfFive.appendChild(dayOneOfFiveDateEl);
  //     dayOneOfFive.appendChild(dayOneOfFiveImgEl);
  //     dayOneOfFive.appendChild(dayOneOfFiveTempEl);
  //     dayOneOfFive.appendChild(dayOneOfFiveWindEl);
  //     dayOneOfFive.appendChild(dayOneOfFiveHumidityEl);

  //     dayTwoOfFive.textContent = "";
  //     dayTwoOfFive.appendChild(dayTwoOfFiveDateEl);
  //     dayTwoOfFive.appendChild(dayTwoOfFiveImgEl);
  //     dayTwoOfFive.appendChild(dayTwoOfFiveTempEl);
  //     dayTwoOfFive.appendChild(dayTwoOfFiveWindEl);
  //     dayTwoOfFive.appendChild(dayTwoOfFiveHumidityEl);

  //     dayThreeOfFive.textContent = "";
  //     dayThreeOfFive.appendChild(dayThreeOfFiveDateEl);
  //     dayThreeOfFive.appendChild(dayThreeOfFiveImgEl);
  //     dayThreeOfFive.appendChild(dayThreeOfFiveTempEl);
  //     dayThreeOfFive.appendChild(dayThreeOfFiveWindEl);
  //     dayThreeOfFive.appendChild(dayThreeOfFiveHumidityEl);

  //     dayFourOfFive.textContent = "";
  //     dayFourOfFive.appendChild(dayFourOfFiveDateEl);
  //     dayFourOfFive.appendChild(dayFourOfFiveImgEl);
  //     dayFourOfFive.appendChild(dayFourOfFiveTempEl);
  //     dayFourOfFive.appendChild(dayFourOfFiveWindEl);
  //     dayFourOfFive.appendChild(dayFourOfFiveHumidityEl);

  //     dayFiveOfFive.textContent = "";
  //     dayFiveOfFive.appendChild(dayFiveOfFiveDateEl);
  //     dayFiveOfFive.appendChild(dayFiveOfFiveImgEl);
  //     dayFiveOfFive.appendChild(dayFiveOfFiveTempEl);
  //     dayFiveOfFive.appendChild(dayFiveOfFiveWindEl);
  //     dayFiveOfFive.appendChild(dayFiveOfFiveHumidityEl);
  //   });
  // storeSearchHistory(city);
  // displayStoredCities();
}

searchButtonEl.addEventListener("click", handleSearch);
