import {Router} from "express";

import {CidadesController} from './../controllers';

const router = Router();

router.get("/",(req,res)=>{
    res.send("inicio");
})

router.post("/cidades",CidadesController.createBodyValidator,CidadesController.create)

export {router};