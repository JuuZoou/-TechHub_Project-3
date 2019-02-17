import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    userType: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        unique: false,
        required: false
    },
    companyCode: {
        type: String,
        unique: false,
        required: false
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    if( !this.isModified('password') ) {
        return next();
    }
    bcrypt.hash( this.password, 5, (err, hash) => {
        if( err ) {
            return next(err);
        }
        this.password = hash;
        next();
    });
})

export const User = mongoose.model('user', UserSchema);