const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Videos = new Schema({
    title : String,
    url : String,
    description : String
});

// Name   --->  model blueprint ---> collection name
module.exports = mongoose.model('Videos', Videos , 'Videos');