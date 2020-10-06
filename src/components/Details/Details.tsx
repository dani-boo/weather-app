import React, { useState } from 'react'
import Temperature from '../Temperature/Temperature'
import handleSetFilter from '../../utils/handleSetState'
import './Details.scss'

interface dataObj {
  city_name?: string
  datetime: string
  max_temp: number
  min_temp: number
  temp: number
  weather: {
    icon: string
  }
}

type dataArr = dataObj[]

export interface weatherData {
  data?: dataArr
  city_name?: string
}
export interface responseData {
  weatherObj?: weatherData
  error?: boolean
  type?: string
  filter?: boolean
}

export const filterData = (props: responseData) => (
  minOrMax: string,
  inputValue: number
) => (setData: (value: any) => void) => {
  const filtered = props?.weatherObj?.data?.filter((day) => {
    if (minOrMax === 'min') return day.min_temp <= inputValue
    if (minOrMax === 'max') return day.max_temp >= inputValue
  })
  setData(filtered)
}

export const handleNumberInput = (setValue: (value: number) => void) => (
  e: React.FormEvent<HTMLInputElement>
) => {
  const target = e.target as HTMLInputElement
  setValue(parseInt(target.value))
}

export const getFiltered = (
  setRenderFiltered: (value: boolean) => void,
  props: responseData,
  filter: string,
  value: number,
  setData: (value: any) => void
) => (e: React.SyntheticEvent) => {
  e.preventDefault()
  filterData(props)(filter, value)(setData)
  setRenderFiltered(true)
}

export const getDataToRender = (
  renderFiltered: boolean,
  dataArr: dataArr | undefined,
  props: responseData
) => {
  return renderFiltered ? dataArr : props.weatherObj?.data
}

export default function Details(props: responseData) {
  const [value, setValue] = useState<number>(0)
  const [filter, setFilter] = useState<string>('')
  const [data, setData] = useState<[]>([])
  const [renderFiltered, setRenderFiltered] = useState(false)

  const selectFilter = handleSetFilter(setFilter)

  const handleInput = handleNumberInput(setValue)

  const getFilteredTemps = getFiltered(
    setRenderFiltered,
    props,
    filter,
    value,
    setData
  )

  const dataToRender = getDataToRender(renderFiltered, data, props)

  return (
    <div className='wrapper'>
      {props.error && <p className='warning'>Please select a city.</p>}
      {props.weatherObj?.data && props.type === 'current' && (
        <div>
          <h3 className='city-name'>
            <strong>{props.weatherObj.data[0].city_name}</strong>
          </h3>
          <p>{Math.round(props.weatherObj.data[0].temp)} degrees celsius</p>
          <img
            alt='weather icon'
            src={`https://www.weatherbit.io/static/img/icons/${props.weatherObj.data[0].weather.icon}.png`}
          />
        </div>
      )}
      {props.weatherObj?.data && props.type === 'sixteenDays' && (
        <>
          <Temperature
            handleNumberInput={handleInput}
            selectFilter={selectFilter}
            getTemperatures={getFilteredTemps}
          />
          <h3 className='city-name'>
            <strong>{props.weatherObj.city_name}</strong>
          </h3>
          <div className='long-list'>
            {dataToRender !== undefined &&
              dataToRender.map((day) => (
                <dl className='day' key={day.datetime}>
                  <dt>{day.datetime}</dt>
                  <img
                    alt='weather icon'
                    className='image'
                    src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                  />
                  <dd>
                    {Math.round(day.max_temp)}°C {Math.round(day.min_temp)}°C
                  </dd>
                </dl>
              ))}
          </div>
        </>
      )}
    </div>
  )
}
