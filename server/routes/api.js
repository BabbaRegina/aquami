const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/aquami', (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        const myAwesomeDB = db.db('aquami');
        myAwesomeDB.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post("/newUser", (req, res) => {
    console.log('Request: ', req.body);
    const newItem = req.body;
    connection((db) => {
        const myAwesomeDB = db.db('aquami');
        myAwesomeDB.collection('users').insertOne({
            "username" : newItem.username,
            "password" : newItem.password,
            "email" : newItem.email
        }).then((response) => {
            res = response;
        })
    });
});

module.exports = router;