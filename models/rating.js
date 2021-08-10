const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    name: {type: String},
    rating: {type: Number, default: 0} 
});

module.exports = mongoose.model('rating', RatingSchema);