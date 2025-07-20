const express = require('express')
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register', async(req, res)=>{
    const {name, email, password, role} = req.body

    if(!['patient', 'doctor', 'admin'].includes(role)){
        return res.status(400).json({message: "invalid role specified"})
    }

    try {
        const existingUser = await User.findOne({where: {email}});
        if (existingUser) return res.status(400).json({message: 'User already exists'})

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword, role})
        res.status(201).json({message: 'User registered successfully'})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({where: {email}})
        if(!user) return res.status(401).json({message: 'User not found'})

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) return res.status(401).json({message: 'Invalid password'})

        const token = jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.status(200).json({message: 'Login successful', token})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;