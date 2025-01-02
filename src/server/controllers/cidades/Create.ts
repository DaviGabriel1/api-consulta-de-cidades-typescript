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
        validatedData = await bodyValidation.validate(req.body)

    }catch(error){
        const yupError = error as yup.ValidationError;
        res.json({
            error:yupError.message
        })
        return;
    }
    console.log(validatedData);

    res.send("create");
    return;
}