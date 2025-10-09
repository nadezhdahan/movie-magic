import { Router } from "express";

const movieController= Router();

movieController.get('/movies/create', (req,res) =>{
    res.send('create movie')
})

export default movieController;