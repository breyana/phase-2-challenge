const clients = require('./clients')

console.log("Finding companies with the name \"" + process.argv[2] + "\"...")

const searchByCompany = (string) => {
  const regex = new RegExp(string.toUpperCase())

  const matchedClients = clients.filter(client => {
    return regex.test(client.company.toUpperCase())
  })

  const clientContainer = []

  matchedClients.forEach(client => {
    const clientIdPhoneCompany = {}
    clientIdPhoneCompany.id = client.id
    clientIdPhoneCompany.company = client.company
    clientIdPhoneCompany.phone = client.phone
    clientContainer.push(clientIdPhoneCompany)
  })

  console.log(JSON.stringify(clientContainer, null, 2))
}

searchByCompany(process.argv[2])
