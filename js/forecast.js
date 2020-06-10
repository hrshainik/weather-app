const key = "caf7d782595c174daf258d23e0b84145";

const getCityWeather = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${key}`;

  const response = await fetch(`${base}${query}`);
  const data = await response.json();

  return data;
};
