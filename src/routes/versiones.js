const {Router}= require('express');
const router = Router();

const versiones = require('./Versiones.json')
router.get('/',(req,res)=>{
    res.json(versiones)
})

module.exports = router;