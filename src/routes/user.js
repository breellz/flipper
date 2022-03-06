const express = require('express')
const User = require('../models/user')
const userAuth = require('../middleware/userAuth')

const router = new express.Router()

//Sign up route
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send()
    }
})

//login route
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

//fetch my profile 

router.get('/users/me', userAuth, (req, res) => {
    try {
        res.send(req.user)
    } catch (error) {
        res.status(400).send()
    }
})

//fetch a user profile

router.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findOne({ _id: userId })
        if (!user) {
           return res.status(404).send({ error: "no user was found" })
        }
        res.send(user)
    } catch (error) {
        res.status(400).send()
    }
})

//update user profile

router.patch('/users/me', userAuth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'lastName','email','password']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates' })
    }
    try {
        const user = req.user

        updates.forEach((update) => user[update] = req.body[update])

        await user.save()
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete user 

router.delete('/users/me', userAuth, async(req, res) => {
    try {
        await req.user.remove()
       // sendCancellationEmail(req.user.email, req.user.name)
        res.send(req.user)
    } catch (error) {
        res.status(400).send()        
    }
})

module.exports = router