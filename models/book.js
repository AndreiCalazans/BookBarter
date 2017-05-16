const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    img_url: String,
    rating: Number,
    onTrade: Boolean,
    createdBy: String,
    createdById: String
});


const model = mongoose.model('book' , bookSchema);
module.exports = model;