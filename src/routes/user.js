const express = require('express')
const User = require('../models/user')
const userAuth = require('../middleware/userAuth')

const router = new express.Router()

//Sign up route
router.post('/users', async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send()
    }
})

//login route
router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})
    } catch (error) {
        res.status(400).send({ error: error.message})
    }
})

module.exports = router