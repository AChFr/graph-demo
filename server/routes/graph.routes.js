const express = require("express")
const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const router = express.Router()
const json1 = require("../data/json1.json")
const json2 = require("../data/json2.json")


//router.get('/', isAuthenticated, (req, res, next) => {

router.get('/', (req, res, next) => {

    res.status(200).json({ data2: json2, data1: json1 })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `Internal Server Error ERROR==>${err}` })
        })
})


module.exports = router