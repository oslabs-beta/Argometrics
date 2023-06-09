import mongoose from 'mongoose';
import { ErrorRequestHandler } from 'express';

const Schema  = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    googleId: { type: String, default: null },
    username: { type: String, unique: true, required: false },
    password: { type: String, required: false }
});

userSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
        bcrypt
            .hash(this.password, SALT_WORK_FACTOR)
            .then((hash: string) => {
                this.password = hash;
                return next();
            })
            .catch((error: ErrorRequestHandler) => {
                return next(error as any);
            })
    }
});

module.exports = mongoose.model('User', userSchema);