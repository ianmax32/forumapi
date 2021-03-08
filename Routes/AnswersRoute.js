const express = require('express');
const router = express.Router()
const Question = require('../Models/Question');

router.get('/', async (req,res)=>{
    try {
        const question = await  Question.find({_id:req.params.id});
        res.json({question});
    } catch (error) {
        res.json({message:err});
    }
});

router.get('/:id', async (req,res)=>{
    try {
        const question = await  Question.find({_id:req.params.id});
        res.json({question});
    } catch (error) {
        res.json({message:err});
    }
});

module.exports = router;