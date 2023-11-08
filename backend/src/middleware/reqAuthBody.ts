import { Request,Response,NextFunction } from "express";

const validateUser = (req:Request,res:Response,next:NextFunction) =>{
    if(!req.body.name){
        return res.status(400).send({
            msg:"Please provide Name"
        });
    };
    if(!req.body.email){
        return res.status(400).send({
            msg:"Please provide Email"
        });
    };
    if(!req.body.password){
        return res.status(400).send({
            msg:"Please provide Password"
        });
    };

    next();
};

export default {
    validateUser
}