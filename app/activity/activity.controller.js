var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');



router.post('/api/activity',createActivity);
module.exports = router;
 

function createActivity(req, res) {
alert('inside the user controller in api controller');
    userService.createActivity(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 

