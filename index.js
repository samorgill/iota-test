// Import Iota
const Iota = require('@iota/core')

// Create a new instance of the API
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})

// Get info about the node
iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(err => console.log(err))

