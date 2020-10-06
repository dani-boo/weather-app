import fetch, { enableFetchMocks } from 'jest-fetch-mock'
import getWeatherForecast, { fetchData } from './getWeatherForecast'
enableFetchMocks()

const urlString =
  'https://weatherbit-v1-mashape.p.rapidapi.com/currentOrDaily?lang=en&city='
const forecastType = 'currentOrDaily'
const someCityName = 'someCityName'

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  fetch.resetMocks()
  fetch.mockResponse('{ "id-key": 1 }', {
    status: 200,
    headers: { 'fake-key': 'fake/value' },
  })
})

describe('fetchData', () => {
  const setWeatherObj = jest.fn()
  it('should call fetch with selected city query', () => {
    fetchData(forecastType, someCityName)(setWeatherObj)
    expect(fetch.mock.calls[0][0]).toStrictEqual(urlString + someCityName)
  })
  it('should call console with error if fetch fails', async () => {
    fetch.mockImplementation(() => Promise.reject('fetch failed'))
    await fetchData(forecastType, someCityName)(setWeatherObj)
    expect(console.error).toHaveBeenCalledWith('fetch failed')
  })
})

describe('getWeatherForecast', () => {
  const setError = jest.fn()
  const setWeatherObj = jest.fn()
  const event = ({
    preventDefault: jest.fn(),
  } as unknown) as React.ChangeEvent<HTMLInputElement>
  it('should set error to true if no city is selected', () => {
    getWeatherForecast(setError, setWeatherObj)(forecastType, '')(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(setError).toHaveBeenCalledWith(true)
  })
  it('should set error to false and reset weather object', () => {
    getWeatherForecast(setError, setWeatherObj)(forecastType, 'London')(event)
    expect(setError).toHaveBeenCalledWith(false)
    expect(setWeatherObj).toHaveBeenCalledWith({})
  })
})
