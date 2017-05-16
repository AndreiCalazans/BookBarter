const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksOnTradeSchema = new Schema({
    name: String,
    img_url: String,
    rating: Number,
    onTrade: Boolean,
    createdBy: String,
    createdById: String,
    requestedBy: String,
    requestedById: String,
    accepted: Boolean

});

const model = mongoose.model('booksOnTrade', booksOnTradeSchema);
module.exports = model; 
