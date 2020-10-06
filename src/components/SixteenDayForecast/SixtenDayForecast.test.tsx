import React from 'react'
import { shallow } from 'enzyme'
import SixteenDayForecast from './SixteenDayForecast'
import Weather from '../Weather/Weather'
import Details from '../Details/Details'

describe('CurrentForecast', () => {
  it('should render Weather and Details components', () => {
    const wrapper = shallow(<SixteenDayForecast/>)
    expect(wrapper.find(Weather)).toHaveLength(1)
    expect(wrapper.find(Details)).toHaveLength(1)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
