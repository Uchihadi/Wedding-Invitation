const usersDB = require("../model/users")

let userService={}

userService.register=async(name, email, wishes, attendingValue)=>{
    console.log("this is from the service")
    const user=await usersDB.createUser(name, email, wishes, attendingValue) 
    if(user){
        return user
    }
    else{
        let err=new Error("Error in creating your account")
        err.status=404
        throw err
    }
}

module.exports=userService