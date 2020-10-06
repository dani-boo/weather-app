import React from 'react'

const handleSetState = (
  setState: (value: string) => void,
  setError?: (value: boolean) => void
) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement
  setState(target.value)
  if (setError) return setError(false)
}

export default handleSetState
