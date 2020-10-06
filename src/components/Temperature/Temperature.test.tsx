import React from 'react'
import { shallow } from 'enzyme'
import Temperature, { refreshPage } from './Temperature'

describe('refreshPage', () => {
  it('should call window.location.reload', () => {
    jest.spyOn(window.location, 'reload').mockImplementationOnce(() => {})
    refreshPage()
    expect(window.location.reload).toHaveBeenCalled()
  })
})
describe('Temperature', () => {
  it('should render with props', () => {
    const minProps = {
      getTemperatures: jest.fn(() => {}),
      handleNumberInput: jest.fn(() => {}),
      selectFilter: jest.fn(() => {}),
    }
    const wrapper = shallow(<Temperature {...minProps} />)
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
