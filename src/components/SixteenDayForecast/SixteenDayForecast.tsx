import React, { useState } from 'react'
import Details from '../Details/Details'
import handleSetCity from '../../utils/handleSetState'
import getWeatherForecast from '../../utils/getWeatherForecast'
import Weather from '../Weather/Weather'
import './SixteenDayForecast.scss'

export default function SixteenDayForecast() {
  const [weatherObj, setWeatherObj] = useState({})
  const [city, setCity] = useState('')
  const [error, setError] = useState(false)

  const forecastType = 'forecast/daily'
  const selectCity = handleSetCity(setCity, setError)
  const getWeather = getWeatherForecast(setError, setWeatherObj)(
    forecastType,
    city
  )

  return (
    <>
      <Weather
        buttonText='See 16 day forecast'
        getWeather={getWeather}
        selectCity={selectCity}
      />
      <Details error={error} type='sixteenDays' weatherObj={weatherObj} />
    </>
  )
}
