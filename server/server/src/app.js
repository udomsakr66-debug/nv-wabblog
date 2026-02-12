const express = require('express')
const cors = require('cors') 
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

// --- Middleware Section ---
app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// --- Routes Section ---
require('./routes.js')(app)

// --- Server Startup Section ---
const port = config.port

sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log('Server running on port ' + port)
    })
  })
  .catch(err => {
    console.error('Unable to connect to database:', err)
  })
