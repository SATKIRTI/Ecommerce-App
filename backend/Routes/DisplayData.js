const express=require('express')
const router=express.Router()

router.post('/milkData',(req,res)=>{
    try{
     console.log(global.milk_product)
     res.send([global.milk_product,global.milk_category])
    }catch(error){
     console.error(error.message);
     res.send("Server Error") 
    }
})
module.exports =  router;