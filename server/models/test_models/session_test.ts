import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieId: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 86400, default: Date.now }
});

module.exports = mongoose.model('Session_test', sessionSchema);