import { useEffect, useState } from "react";
import { getWeatherData } from './WeatherApi'

export const WeatherInfo = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData('Minsk')
      setWeather(data)
    }

    fetchWeatherData()
  }, [])

  let date = new Date()
  let currentDate = date.getDate();
  let year = date.getFullYear()
  let month = date.toLocaleDateString('default', {month: 'long'})
  let day = date.toLocaleDateString('default', {weekday: 'long'})

  let time = date.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return (
    <div>
      <p>{day}, {month}, {currentDate}, {year} <br /> {time}</p>
      <p>{`${weather.name}, ${weather.country}`}</p>
      <p>{weather.description}</p>
      <p>{`${weather.temp.toFixed()} °C`}</p>
      <p>{weather.humidity}</p>
      <p>{weather.speed}</p>
      <p>{weather.feels_like.toFixed()}</p>
    </div>
  )
}