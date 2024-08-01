import express from "express";
import { formRouter } from "./modules/routes/form.route";

export const makeApp = () => {
    const app = express();

    app.use(express.json());

    app.use("/forms", formRouter);

    app.use((req, res) => {
        res.status(404).send({message: "Page not found"});
    });
    return app;
}