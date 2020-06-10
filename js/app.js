const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  const { cityDetails } = data;
  console.log(cityDetails);

  // update details template
  details.innerHTML = `
  <h5 class="my-3">${cityDetails.name}</h5>
  <div class="my-3">${cityDetails.weather[0].main}</div>
  <div class="display-4 my-4">
  <span>${cityDetails.main.temp}</span>
  <span>&deg;C</span>
  </div>
  `;

  // update th night/day image & icon
  // const iconSrc = `img/icons/.svg`;
  // icon.setAttribute("src", iconSrc);

  // let timeSrc = null;
  // if (weather.IsDayTime) {
  //   timeSrc = "img/day.svg";
  // } else {
  //   timeSrc = "img/night.svg";
  // }

  // time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCityWeather(city);
  // const weather = await getWeather("2643743");
  // console.log(weather);

  return {
    cityDetails,
    // weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  // Update ui with new city
  updateCity(city)
    .then((data) => {
      return updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
