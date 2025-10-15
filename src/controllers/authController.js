import { Router } from "express";

const authController= Router()

authController.get('/',(req,res)=>{
    res.send('hi')
})

export default authController