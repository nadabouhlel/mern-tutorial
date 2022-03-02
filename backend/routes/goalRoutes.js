const express = require ('express')
const router = express.Router()
const {getGoal ,setGoal,updateGoal,  deleteGoal} = require ('../controllers/goalController')


//because we have the same route for grt and post we replace it with : 
router.route('/').get(getGoal).post(setGoal)

//router.get('/', getGoal) ;
//router.post('/', setGoal    //when we hit /api/goals from the front it will redirect us to json file
  //  ) ;

  router.route('/:id').put(updateGoal).delete(deleteGoal)

 //  router.put('/:id', updateGoal  //needs an id 
     //the variable
  // ) ;
  // router.delete('/:id', deleteGoal   //when we hit /api/goals from the front it will redirect us to json file
    //the variable
  // ) ;
   
module.exports = router