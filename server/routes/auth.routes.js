const express = require("express")
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const router = express.Router()
const saltRounds = 10


///////// C R E A T E  U S E R //////////

router.post('/signup', (req, res, next) => {

    const { password, username } = req.body

    if (password === '' || username === '') {
        res.status(400).json({ message: "Provide password and username" })
        return
    }

    User
        .findOne({ username })
        .then((foundUser) => {
            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            else {
                const salt = bcrypt.genSaltSync(saltRounds)
                const hashedPassword = bcrypt.hashSync(password, salt)

                return User.create({ password: hashedPassword, username })

                    .then((createdUser) => {
                        const { username, _id } = createdUser

                        const user = { username, _id }

                        res.status(201).json({ user })
                    })
            }
        })

        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `Internal Server Error ERROR==>${err}` })
        })
})



///////// L O G I N   U S E R //////////

router.post('/login', (req, res, next) => {

    const { username, password } = req.body;

    if (username === '' || password === '') {
        res.status(400).json({ message: "Provide username and password." })
        return
    }

    User
        .findOne({ username })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, username } = foundUser

                const payload = { _id, username }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })
})


router.get('/verify', isAuthenticated, (req, res, next) => {
    console.log(req.payload);
    res.status(200).json(req.payload)
})


module.exports = router