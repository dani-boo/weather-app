import handleSetState from './handleSetState'

describe('handleSetState()', () => {
  const setState = jest.fn()
  const setError = jest.fn()
  const event = {
    target: { value: 'the-value' },
  } as React.ChangeEvent<HTMLInputElement>

  it("should not call setError if it isn't a prop", () => {
    handleSetState(setState)(event)
    expect(setError).not.toHaveBeenCalled()
  })
  it('should call setCity() with selected value', () => {
    handleSetState(setState, setError)(event)
    expect(setState).toHaveBeenCalledWith('the-value')
    expect(setError).toHaveBeenCalledWith(false)
  })
})
