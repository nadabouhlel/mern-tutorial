const asyncHandler = require ('express-async-handler')
const Goal = require('../model/goalModel')

//the requests we wil be calling in the goalRouter ; the access will be private when we add authentification 
const getGoal = asyncHandler (async (req, res) => {
    const goals  = await Goal.find()     //create a variable called goals and get them from our db with mongoose model
    
    
        res.status(200).json({goals})    //({message : 'Get goals'}) : instead of returning a message we will return the goals
    
})

const setGoal =asyncHandler ( async(req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('please add text')
    }
    const goal = await Goal.create({
        text : req.body.text
    })


    res.status(200).json(goal) 
    
}
)

const updateGoal =asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })


    res.status(200).json(updatedGoal)
    
}
)
const deleteGoal = asyncHandler (async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id : req.params.id})
    
}
)

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,

}