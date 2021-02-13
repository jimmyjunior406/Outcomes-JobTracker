const Target = require('../models/target');
const express = require('express');
const targetRouter = express.Router();

//Create
targetRouter.post('/', async (req, res)=> {
    try {
        const newTargetAdd = await Target.create(req.body);
        res
          .status(200)
          .json(newTargetAdd)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})

//INDEX
targetRouter.get('/', async (req, res) => {
    try {
        const foundTargets = await Target.find({})
        res 
            .status(200)
            .json(foundTargets)
    } catch (error) {
        res
            .status(400)
            .json(error)
    }
})

//SHOW
targetRouter.get('/:id', async (req, res) => {
    try {
        const foundTarget = await Target.findById(req.params.id)
        res
            .status(200)
            .json(foundTarget)
    } catch {
        res 
            .status(400)
            .json(error)
    }
})

//DELETE
targetRouter.delete('/:id', async (req, res) => {
    try {
        foundTarget = await Target.findByIdAndDelete(req.params.id)
        res 
            .status(200)
            .json(foundJob)
    } catch (error){
        res 
            .status(400)
            .json(error)
    }
})

//UPDATE
targetRouter.put('/:id', async (req, res) => {
    try {
        const foundTarget = await Target.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res 
            .status(200)
            .json(foundTarget)
    } catch (error) {
        res 
            .status(400)
            .json(error)
    }
})

module.exports = targetRouter;