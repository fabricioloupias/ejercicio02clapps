const mongoose = require('mongoose');
const URI = 'mongodb://localhost/clapps'


mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('db conectada'))
    .catch(err => console.log(err))

module.exports = mongoose;