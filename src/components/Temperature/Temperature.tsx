import React from 'react'
import './Temperature.scss'

export const filters = ['min', 'max']

export interface temperatureProps {
  getTemperatures: (e: React.SyntheticEvent<Element, Event>) => void
  handleNumberInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const refreshPage = () => {
  window.location.reload()
}

const Temperature = (props: temperatureProps) => {
  return (
    <>
      <h3>Search by temperature:</h3>
      <form onSubmit={props.getTemperatures}>
        <label className='field'>
          <input
            type='number'
            name='temperature'
            placeholder=''
            onChange={props.handleNumberInput}
          />
        </label>
        {filters?.map((filter) => (
          <label key={filter}>
            <input
              type='radio'
              name='filter'
              value={filter}
              onChange={props.selectFilter}
            />
            {filter}
          </label>
        ))}
        <button className='button' type='submit'>
          Filter results
        </button>
      </form>
      <button className='button' onClick={refreshPage}>
        Refresh page
      </button>
    </>
  )
}

export default Temperature
