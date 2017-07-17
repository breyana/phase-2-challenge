module.exports = (date) => {
  if (typeof date !== "object") {
    throw new Error("Please pass in a Date object")
  }

  const months = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ]
  let month = date.getMonth()
  return months[month]
}
