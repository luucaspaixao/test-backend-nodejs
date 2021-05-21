const express = require('express')
const app = express()
const router = require('./src/routes/routes.js')

const connectDatabase = require('./src/database/index')

connectDatabase()

app.use(express.json())
app.use(router)

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
})
