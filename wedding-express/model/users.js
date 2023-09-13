const dbModel = require("../utilities/connections")

const usersDB = {}

usersDB.createUser = async (name, email, wishes, attendingValue) => {
let model = await dbModel.getUser();
const data = await model.create({name, email, wishes, attendingValue});
    if (data) {
        return data;
    } else {
        return null;
    }
};

module.exports=usersDB