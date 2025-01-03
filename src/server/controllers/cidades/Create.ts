import {Request, Response} from "express"
import * as yup from "yup";

interface ICidade{
    nome:string;
    estado:string
}

const bodyValidation: yup.Schema<ICidade> = yup.object({
    nome: yup.string().required().min(3),
    estado: yup.string().required(),
  }).required();
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req:Request<{},{},ICidade>,res:Response) => { //request está com o body tipado
    
    let validatedData: ICidade | undefined = undefined;

    try{
        validatedData = await bodyValidation.validate(req.body,{abortEarly:false}) //não aborta ao encontrar o primeiro erro

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
    console.log(validatedData);

    res.send("create");
    return;
}