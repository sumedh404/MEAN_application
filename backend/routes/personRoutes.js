
const express = require('express')
const Person = require('../model/Person');
const { model } = require('mongoose');
const router = express.Router();




//create a user
router.post("/create", async function (req, res) {

    const person = new Person({
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        mobileNumber : req.body.mobileNumber
    })


    try{

        const newPerson = await person.save();
        res.status(200).json(newPerson);
    }catch(err){
        res.status(400).json({message: err.message});
    }
})

//get a user

router.get('/', async function (req, res) {

    try{

        const people = await Person.find();
        res.status(200).json(people);

    }catch(err){
        res.status(400).json({message: err.message});
    }
})

// edit user details
router.put('/update/:id', async function (req, res) {

        try{
            const updatePerson = await Person.findByIdAndUpdate(req.params.id, req.body,{new : true})

            if(!updatePerson){
            return res.status(404).json({message:"Person not found"})
            }
        }catch(err){
            res.status(404).json({message: err.message});
        }
})


//// delete a user

router.delete('/delete/:id', async function (req, res) {

        try{

            const deletePerson = await Person.findByIdAndDelete(req.params.id);
            if(!deletePerson){
                res.status(404).json({message: "Person not found" })
            }

        }catch(err){
            res.status(404).json({message: err.message});
        }
})


module.exports = router;