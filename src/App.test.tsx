import React from 'react'
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme'
import App from './App'
import CurrentForecast from './components/CurrentForecast/CurrentForecast'

describe('App', () => {
  it('renders with CurrentForecast component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(CurrentForecast)).toHaveLength(1)
  })
})
