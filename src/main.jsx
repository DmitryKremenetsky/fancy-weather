import React from 'react'
import ReactDOM from 'react-dom/client'
import { Normalize } from 'styled-normalize'
import { WeatherInfo } from './components/Weather/Weather'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Normalize />
    <WeatherInfo />
  </React.StrictMode>,
)
