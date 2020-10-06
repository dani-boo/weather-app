import React from 'react'
import './Weather.scss'

export interface weatherProps {
  getWeather: (e: React.SyntheticEvent<Element, Event>) => void,
  selectCity: (e: React.ChangeEvent<HTMLInputElement>) => void,
  buttonText: string,
}

export const cities = ['London, UK', 'New York', 'Mumbai', 'Sydney, AU', 'Tokyo']

const Weather = (props: weatherProps) => {
  return (
    <>
      <h2 className='heading'>Select a city:</h2>
      <form onSubmit={props.getWeather}>
        {cities?.map((city) => (
            <label className='radio' key={city}>
              <input
                type='radio'
                name='city'
                value={city}
                onChange={props.selectCity}
              />
              {city}
            </label>
          ))}
        <div className='button-wrapper'>
          <button className='button' type='submit'>
            {props.buttonText}
          </button>
        </div>
      </form>
    </>
  )
}

export default Weather
