import { Router } from "express";

const castController= Router();

castController.get('/',(req,res) =>{
    res.send('hi')
})

export default castController