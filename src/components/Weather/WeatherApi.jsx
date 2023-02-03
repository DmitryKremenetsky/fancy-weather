const apiKey = '9558d6836678d54597c99a146cf89572'

const getWeatherData = async (location, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`

  const data = await fetch(URL).then((res) => res.json()).then((data) => data)
  const {
    weather, 
    main: {temp, feels_like, humidity},
    wind: {speed},
    sys: {country},
    name,  
  } = data; 

  const {description} = weather[0];

  return {
    temp,
    feels_like,
    humidity,
    speed,
    country,
    name,
    description,
  }
}

export { getWeatherData }