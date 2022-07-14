const express = require('express')
const router = express.Router()

const Tasks = require('../models/ticket')

// get all
router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.find()
        // const tasks = {
        //     name: 'name',
        //     name2: ' test '
        // }
        res.json(tasks)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create one 
router.post('/', async (req, res) => {
    console.log(req.body);
    const task = new Tasks({
        ...req.body
    })
    try {
        const newTask = task.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router