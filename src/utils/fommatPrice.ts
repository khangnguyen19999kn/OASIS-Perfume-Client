export const customToLocaleString = (number: string | number | undefined) => {
  if (typeof number === 'number') {
    return new Intl.NumberFormat('en-US').format(number)
  }
  if (typeof number === 'string') {
    const parsedValue = parseFloat(number)
    if (!Number.isNaN(parsedValue)) {
      return new Intl.NumberFormat('en-US').format(parsedValue)
    }
  }
  return number
}
