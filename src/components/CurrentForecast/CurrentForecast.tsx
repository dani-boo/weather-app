import React, { useState } from 'react'
import Weather from '../Weather/Weather'
import Details from '../Details/Details'
import handleSetCity from '../../utils/handleSetState'
import getWeatherForecast from '../../utils/getWeatherForecast'

export default function CurrentForecast() {
  const [weatherObj, setWeatherObj] = useState({})
  const [city, setCity] = useState('')
  const [error, setError] = useState(false)

  const forecastType = 'current'
  const getWeather = getWeatherForecast(setError, setWeatherObj)(forecastType, city)
  const selectCity = handleSetCity(setCity, setError)

  return (
    <>
      <Weather getWeather={getWeather} selectCity={selectCity} buttonText="See today's forecast" />
      <Details error={error} type='current' weatherObj={weatherObj} />
    </>
  )
}
