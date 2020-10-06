import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentForecast from './components/CurrentForecast/CurrentForecast'
import SixteenDayForecast from './components/SixteenDayForecast/SixteenDayForecast'

import './App.scss'

export default function App() {
  return (
    <Router>
      <div className='wrapper'>
        <header className='header'>
          <h2 className='weather-title'>How's the Weather?</h2>
        </header>
        <main>
          <div className='router-links-div'>
            <Link className='router-link' to='/'>
              Current Weather
            </Link>
            <Link className='router-link' to='/16dayforecast'>
              16 Day Forecast
            </Link>
          </div>
          <Route path='/' exact component={CurrentForecast} />
          <Route path='/16dayforecast' component={SixteenDayForecast} />
        </main>
        <footer>
          <span>
            A tech test using the{' '}
            <a
              href='https://rapidapi.com/weatherbit/api/weather/Details'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              weatherbit API
            </a>
          </span>
        </footer>
      </div>
    </Router>
  )
}
