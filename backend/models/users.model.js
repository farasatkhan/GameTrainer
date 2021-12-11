const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
    score: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    percentage: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    }
},
{
    timestamps:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;