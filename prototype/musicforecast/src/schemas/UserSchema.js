const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    mode: { type: String, required: true },
    theme: { type: String, required: true },
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

