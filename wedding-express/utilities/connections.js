const { error } = require("console");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Wedding_DB"

let userSchema = Schema({
    name: String,
    wishes: String,
    attendingValue: Number
}, { collection: "User" })

let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('User', userSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}