import {Request, Response} from "express"

interface ICidade{
    nome:string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = (req:Request<{},{},ICidade>,res:Response) => { //request está com o body tipado
    const data: ICidade = req.body;
    console.log(data.nome)
    res.send("create");
    return;
}