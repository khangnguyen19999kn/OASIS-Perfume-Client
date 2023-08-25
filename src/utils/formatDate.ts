export const formatDate = (date: Date | undefined) => {
  if (date) {
    const dateFormated = new Date(date)
    const day = String(dateFormated.getDate() ?? 1).padStart(2, '0')
    const month = String(dateFormated.getMonth() + 1 ?? 1).padStart(2, '0')
    const year = dateFormated.getFullYear() ?? 2023

    return `${day}/${month}/${year}`
  }
  return '01/01/2023'
}
