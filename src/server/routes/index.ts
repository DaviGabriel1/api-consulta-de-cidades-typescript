import {Router} from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("inicio");
})

router.post("/teste/:id",(req,res)=>{
    console.log(req.params.id)
    console.log(req.cookies)
    console.log(req.query);
    console.log(req.body);
    res.json({message: "processado."});
})

export {router};