const mongoose = require('mongoose');

const { Schema } = mongoose;

const teeTimeSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course',
    }]
});

const TeeTime = mongoose.model('TeeTime', teeTimeSchema);

module.exports = TeeTime;