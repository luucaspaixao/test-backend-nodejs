const mongoose = require('mongoose');

function connectDatabase() {
  mongoose.connect(
  'mongodb://localhost/anotaaidev_api', 
  { 
    useNewUrlParser: true , 
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => { console.log('Banco conectado'); })
}

module.exports = connectDatabase;