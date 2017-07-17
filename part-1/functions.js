const month = (date) => {
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

const reverseSentence = (string) => {
  if (typeof string !== "string") {
    throw new Error("Please pass in a String")
  }
  const stringArray = string.split(" ")
  return stringArray.reverse().join(" ")
}

const nameProps = (object) => {
  if (typeof object !== "object") {
    throw new Error("Please pass in an object")
  }
  return Object.keys(object).sort()
}

module.exports = {
  month,
  reverseSentence,
  nameProps
}
