const app = require('express')()
const cors = require('cors')

const characters = require('./data/characters.json')

// Config

const PORT = 3030
app.use(cors())

app.listen(PORT, () => {
  console.log(`API is up and listening on port ${ PORT }.`)
})

// Routes

/*
 * Returns a test message to check API functionality.
 */
 app.use('/test', (req, res) => {
  res.status(200).send({ message: 'it works!' })
})

//
// candidate completes logic for any additional endpoints.
//

