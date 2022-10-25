const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    par: {
        type: Number,
        required: true,
    },
    holes: {
        type: Number,
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    cart: {
        type: Boolean,
        required: false,
    },
    image: {
        type: String,
    }
});

const Course = model('Course', courseSchema);

module.exports = Course;