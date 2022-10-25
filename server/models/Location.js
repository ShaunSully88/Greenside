const mongoose = require('Mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
    },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;