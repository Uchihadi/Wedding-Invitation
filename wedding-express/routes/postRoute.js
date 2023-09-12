const express = require('express');
const router = express.Router();
// const port = 4000;

// Set up Middleware to parse JSON data
router.use(express.json());

// router.get('/api/goals', (req, res) => {
//     res.status(200).json({message: 'Get Goals'})
// })

router.post('/success', (req,res) => {
    let name = req.body.name;
    let wishes = req.body.wishes;
    let attendingValue = req.body.attendingValue;
    console.log(req.body)
    userservice.createuser(name, wishes, parseInt(attendingValue)).then(function (newUser){
        res.json(newUser)
    }).catch(err => next(err));
    res.send('POST Request Received!')
});

// Starting Server
router.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = router;