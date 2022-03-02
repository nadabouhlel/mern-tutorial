const asyncHandler = require ('express-async-handler')
//the requests we wil be calling in the goalRouter ; the access will be private when we add authentification 
const getGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message : 'Get goals'})
    
})

const setGoal =asyncHandler ( async(req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('please add text')
    }
    res.status(200).json({message : 'Set goal' }) 
    
}
)

const updateGoal =asyncHandler (async (req, res) => {
    res.status(200).json({message : `Update goal ${req.params.id}`  })
    
}
)
const deleteGoal = asyncHandler (async(req, res) => {
    res.status(200).json({message : `Delete goal ${req.params.id}`  })
    
}
)

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,

}