import {Router} from "express";
import { formService } from "../../config";

export const formRouter = Router();

formRouter.get("/getFormList", (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send({message: "You are not logged in"});
        return;
    }
    const forms = formService.getForms(req.headers.authorization);
    res.send(forms);
});

formRouter.post("/createForm", (req, res) => {
    res.status(200).send(10);
});
