const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        private: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    isConfirmed: {
        type: Boolean,
        default: false,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = model("User", userSchema);