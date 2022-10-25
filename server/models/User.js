const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const TeeTime = require('./TeeTime');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Invalid Email'],
    },
    firstname: {
        type: String,
        required: true,
    },
    lasName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
    },

    teetime: TeeTime.schema
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassowrd = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;