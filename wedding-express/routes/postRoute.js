const express = require('express');
const userService = require('../services/userservice');
const router = express.Router();
// const port = 4000;

// Set up Middleware to parse JSON data
router.use(express.json());

router.post('/success', async (req,res) => {
    let {name,email,wishes,attendingValue} = req.body;
    console.log("this is from router")
    let newUser = await userService.register(name, email, wishes, attendingValue);
    res.status(200).send("success")
});


module.exports = router;