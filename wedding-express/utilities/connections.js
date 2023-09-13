const { error } = require("console");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Wedding_DB"

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    wishes: String,
    attendingValue: Number,
}, { collection: "User" })

let dbModel = {};

dbModel.getUser = async () => {
    try {
        mongoose.connect(url);
        return mongoose.model("User", userSchema);
    } catch (err) {
        let error = new Error ("Cannot connect to DB");
        error.status = 500;
        throw error;
    }
}

module.exports = dbModel