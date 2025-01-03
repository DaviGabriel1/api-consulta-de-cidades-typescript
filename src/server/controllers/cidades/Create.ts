import {Request, RequestHandler, Response} from "express"
import * as yup from "yup";

interface ICidade{
    nome:string;
    estado:string
}

const bodyValidation: yup.Schema<ICidade> = yup.object({
    nome: yup.string().required().min(3),
    estado: yup.string().required(),
  }).required();


export const createBodyValidator:RequestHandler = async (req,res,next) =>{
    
    try{
        await bodyValidation.validate(req.body,{abortEarly:false}) //não aborta ao encontrar o primeiro erro
        return next();
    }catch(error){
        const yupError = error as yup.ValidationError;
        const errors: Record<string,string>  = {};

        yupError.inner.forEach(error=> {
            if(error.path === undefined) return;

            errors[error.path] = error.message
        });
        res.status(400).json({
            errors
        })
        return;
    }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req:Request<{},{},ICidade>,res:Response) => { //request está com o body tipado
    console.log(req.body);

    res.send("create");
    return;
}