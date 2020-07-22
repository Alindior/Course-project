const mongoose = require("mongoose");
const config = require("../keys");

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(config.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Your application connected to DB");
    } catch (err) {
        if (err) console.log(err);
    }
}

module.exports = connectToMongoDB;