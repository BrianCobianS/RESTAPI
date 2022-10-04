const {Router}= require('express')
const router = Router()
 
router.get('/',(req,res)=>{
    res.json({'ola':1});  
});

module.exports = router; 