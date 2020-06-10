const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");
const unit = document.querySelector(".display-4");

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
  const iconSrc = `img/${cityDetails.weather[0].icon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (cityDetails.weather[0].icon.includes("d")) {
    timeSrc = "img/day.jpg";
  } else {
    timeSrc = "img/night.jpg";
  }

  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
    card.classList.add("opacity");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCityWeather(city);

  return {
    cityDetails,
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
