'use strict'
const firebase = require('../db');
const Store = require('../models/db');
const firestore = firebase.firestore();

const getstops = async (req, res, next) => {
    try {
        const shops = await firestore.collection('stores').doc().get();
        res.send(shops)
    } catch (err) {
        res.status(400).send(err.message)
    }
}
module.exports = {
    getshops
}