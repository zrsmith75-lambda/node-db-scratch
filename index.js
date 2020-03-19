require('dotenv').config()


const server = require('./api/server.js')

const PORT = process.env.PORT || 5775

server.listen(PORT, () => {
  console.log(`Server is listening better than children on port ${PORT}`)
})