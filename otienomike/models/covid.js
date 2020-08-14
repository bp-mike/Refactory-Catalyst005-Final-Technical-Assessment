const mongoose = require('mongoose')
const covidSchema = new mongoose.Schema({
     surName:String,
     givenName:String, 
     bd:String,  
     place:String, 
     occupation:String, 
     nationality:String,  
     gender:String, 
     category:String, 
})
module.exports = mongoose.model('covid_19', covidSchema)