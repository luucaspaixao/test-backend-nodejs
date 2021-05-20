const express = require('express')
const app = express()
const router = require('./routes/routes.js')

app.use(router)

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
})
