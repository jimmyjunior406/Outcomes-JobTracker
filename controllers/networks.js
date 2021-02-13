const Network = require('../models/network');
const express = require('express');
const networkRouter = express.Router();

//Create
networkRouter.post('/', async (req, res)=> {
    try {
        const newNetworkAdd = await Network.create(req.body);
        res
          .status(200)
          .json(newNetworkAdd)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})

//INDEX
networkRouter.get('/', async (req, res) => {
    try {
        const foundNetworks = await Network.find({})
        res 
            .status(200)
            .json(foundNetworks)
    } catch (error) {
        res
            .status(400)
            .json(error)
    }
})

//SHOW
networkRouter.get('/:id', async (req, res) => {
    try {
        const foundNetwork = await Network.findById(req.params.id)
        res
            .status(200)
            .json(foundNetwork)
    } catch {
        res 
            .status(400)
            .json(error)
    }
})

//DELETE
networkRouter.delete('/:id', async (req, res) => {
    try {
        foundNetwork = await Network.findByIdAndDelete(req.params.id)
        res 
            .status(200)
            .json(foundNetwork)
    } catch (error){
        res 
            .status(400)
            .json(error)
    }
})

//UPDATE
networkRouter.put('/:id', async (req, res) => {
    try {
        const foundNetwork = await Network.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res 
            .status(200)
            .json(foundNetwork)
    } catch (error) {
        res 
            .status(400)
            .json(error)
    }
})

module.exports = networkRouter;