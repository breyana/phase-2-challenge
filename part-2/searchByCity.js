const clients = require('./clients')

console.log("Finding clients in City \"" + process.argv[2] + "\"...")

const searchByCity = (string) => {
  const matchedClients = clients.filter(client => {
    return client.city.toUpperCase() === string.toUpperCase()
  })

  const clientContainer = []

  matchedClients.forEach(client => {
    const clientRepCompanyLocation = {}
    clientRepCompanyLocation.id = client.id
    clientRepCompanyLocation.rep_name = client.rep_name
    clientRepCompanyLocation.company = client.company
    clientRepCompanyLocation.city = client.city
    clientRepCompanyLocation.state = client.state
    clientContainer.push(clientRepCompanyLocation)
  })

  console.log(JSON.stringify(clientContainer, null, 2))
}

searchByCity(process.argv[2])
