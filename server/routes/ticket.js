const express = require('express')
const router = express.Router()

const Ticket = require('../models/ticket')

// get all
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find({state: 'Open'})
        res.json(tickets)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create one 
router.post('/', async (req, res) => {
    // console.log(req.body);
    const ticket = new Ticket({
        ...req.body
    })
    try {
        const newTicket = ticket.save()
        res.status(201).json(newTicket)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// update one
router.patch('/:id', getTicket, async (req,res) => {
    // console.log("req.body: ", req.body);
    // console.log("req.ticket: ", res.ticket);
    if(req.body.ticket != null) {
        res.ticket.ticket = req.body.ticket
    }
    try {
        // res.ticket = {
        //     ...res.ticket,
        //     ...req.body
        // }
        res.ticket.state = req.body.state
        req.body.title && (res.ticket.title = req.body.title)
        // console.log('-=-=-=-=-=-=-=-=-=-=-');
        // console.log("req.ticket: ", res.ticket);
        // console.log('-=-=-=-=-=-=-=-=-=-=-');
        const newTicket = await res.ticket.save()
        // console.log('newTicket: ', newTicket);
        res.json(newTicket)

    } catch (error) {
        console.log(400, error.message);
        res.status(400).json({message: error.message})
    }
})

// middlleware get one 
async function getTicket(req, res, next) {
    let ticket 
    try {
        ticket = await Ticket.findById(req.params.id)
        if (ticket == null) {
            return res.status(400).json({message: 'Cannot find ticket.'})
        }
    } catch (error) {
        console.log(`-=-=-=-=-=-=-=-=-`);
        console.log(req.params.id);
        console.log(`-=-=-=-=-=-=-=-=-`);
        console.log(error.message);
        console.log(`-=-=-=-=-=-=-=-=-`);
        return res.status(500).json({message: error.message})
    }
    res.ticket = ticket
    next()
}

module.exports = router