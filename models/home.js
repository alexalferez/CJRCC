const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const homeSchema = new Schema({
    discrpition: String,
    picture: String,  
})

module.exports = mongoose.model('Home', homeSchema);