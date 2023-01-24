const bcrypt = require('bcrypt');

const User = require('../models/user');

async function register (req, res) {
    const data = req.body;
    res.status(201).send(data);
};

async function login (req, res) {
    const data = req.body;
    res.status(200).send(data);
}

module.exports = {
    register, login
}                           