import React from 'react'
import { shallow } from 'enzyme'
import set from 'lodash/set'
import Details, {
  filterData,
  handleNumberInput,
  getDataToRender,
  getFiltered,
} from './Details'

const obj = {
  weatherObj: {
    data: [
      {
        datetime: 'datetime',
        min_temp: 4,
        max_temp: 30,
        temp: 0,
        weather: { icon: 'icon' },
      },
      {
        datetime: 'datetime',
        min_temp: 3,
        max_temp: 20,
        temp: 0,
        weather: { icon: 'icon' },
      },
      {
        datetime: 'datetime',
        min_temp: 20,
        max_temp: 10,
        temp: 0,
        weather: { icon: 'icon' },
      },
      {
        datetime: 'datetime',
        min_temp: 2,
        max_temp: 50,
        temp: 0,
        weather: { icon: 'icon' },
      },
      {
        datetime: 'datetime',
        min_temp: 90,
        max_temp: 45,
        temp: 0,
        weather: { icon: 'icon' },
      },
      {
        datetime: 'datetime',
        min_temp: 0,
        max_temp: 5,
        temp: 0,
        weather: { icon: 'icon' },
      },
      {
        datetime: 'datetime',
        min_temp: 79,
        max_temp: 82,
        temp: 0,
        weather: { icon: 'icon' },
      },
    ],
  },
}

const filteredMin = [
  {
    datetime: 'datetime',
    min_temp: 4,
    max_temp: 30,
    temp: 0,
    weather: { icon: 'icon' },
  },
  {
    datetime: 'datetime',
    min_temp: 3,
    max_temp: 20,
    temp: 0,
    weather: { icon: 'icon' },
  },
  {
    datetime: 'datetime',
    min_temp: 2,
    max_temp: 50,
    temp: 0,
    weather: { icon: 'icon' },
  },
  {
    datetime: 'datetime',
    min_temp: 0,
    max_temp: 5,
    temp: 0,
    weather: { icon: 'icon' },
  },
]

describe('filterData', () => {
  const setData = jest.fn()
  it('filters data min_temps and calls setData with filtered results', () => {
    filterData(obj)('min', 15)(setData)
    expect(setData).toHaveBeenCalledWith(filteredMin)
  })
  it('filters data max_temps and calls setData with filtered results', () => {
    const filtered = [
      {
        datetime: 'datetime',
        min_temp: 79,
        max_temp: 82,
        temp: 0,
        weather: { icon: 'icon' },
      },
    ]

    filterData(obj)('max', 79)(setData)
    expect(setData).toHaveBeenCalledWith(filtered)
  })
  it("doesn't filter if filters are not min or max", () => {
    filterData(obj)('fake filter', 50)(setData)
    expect(setData).toHaveBeenCalledWith([])
  })
})

describe('handleNumberInput', () => {
  it('should call setValue() with selected value', () => {
    const setValue = jest.fn()
    const event = {
      target: { value: '20' },
    } as React.ChangeEvent<HTMLInputElement>

    handleNumberInput(setValue)(event)
    expect(setValue).toHaveBeenCalledWith(20)
  })
})

describe('getFiltered', () => {
  it('calls filter functions and sets filtered to true', () => {
    const setRenderFiltered = jest.fn()
    const e = ({
      preventDefault: jest.fn(),
    } as unknown) as React.ChangeEvent<HTMLInputElement>
    const setData = jest.fn()
    getFiltered(setRenderFiltered, obj, 'min', 15, setData)(e)
    expect(e.preventDefault).toHaveBeenCalled()
    expect(setRenderFiltered).toHaveBeenCalledWith(true)
  })
})

describe('getDataToRender', () => {
  it('should return data array if renderFiltered is true', () => {
    const filtered = getDataToRender(true, filteredMin, obj)
    expect(filtered).toBe(filteredMin)
  })
  it('should return weather object if renderFiltered is false', () => {
    const filtered = getDataToRender(false, filteredMin, obj)
    expect(filtered).toBe(obj.weatherObj?.data)
  })
})

describe('Details', () => {
  it('should render with error', () => {
    set(obj, 'error', true)
    const wrapper = shallow(<Details {...obj} />)
    expect(wrapper.text().includes('Please select a city.')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render current data', () => {
    set(obj, 'error', false)
    set(obj, 'type', 'current')
    const wrapper = shallow(<Details {...obj} />)
    expect(wrapper.text().includes('degrees celsius')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render 16 days data', () => {
    set(obj, 'type', 'sixteenDays')
    const wrapper = shallow(<Details {...obj} />)
    expect(wrapper.text().includes('°C')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
