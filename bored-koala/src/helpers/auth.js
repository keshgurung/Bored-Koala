export const getValue = () => {
  return window.localStorage.getItem('value')
}

export const setValue = (value) => {
  window.localStorage.setItem('value', value)
}

export const removeValue = () => {
  window.localStorage.removeItem('value')
}
