const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const score = req.body.score;
    const percentage = req.body.percentage;

    const newUser = new User({username, email, password, score, percentage});

    newUser.save()
    .then(() => res.json('User added to the db!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;