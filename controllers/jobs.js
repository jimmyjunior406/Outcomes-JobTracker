const Job = require('../models/job');
const express = require('express');
const jobRouter = express.Router();

//Create
jobRouter.post('/', async (req, res)=> {
    try {
        const newJobAdd = await Job.create(req.body);
        res
          .status(200)
          .json(newJobAdd)
    } catch (error){
        res
          .status(400)
          .json(error)
    }
})

//INDEX
jobRouter.get('/', async (req, res) => {
    try {
        const foundJobs = await Job.find({})
        res 
            .status(200)
            .json(foundJobs)
    } catch (error) {
        res
            .status(400)
            .json(error)
    }
})

//SHOW
jobRouter.get('/:id', async (req, res) => {
    try {
        const foundJob = await Job.findById(req.params.id)
        res
            .status(200)
            .json(foundJob)
    } catch {
        res 
            .status(400)
            .json(error)
    }
})

//DELETE
jobRouter.delete('/:id', async (req, res) => {
    try {
        foundJob = await Job.findByIdAndDelete(req.params.id)
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
jobRouter.put('/:id', async (req, res) => {
    try {
        const foundJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res 
            .status(200)
            .json(foundJob)
    } catch (error) {
        res 
            .status(400)
            .json(error)
    }
})

module.exports = jobRouter;