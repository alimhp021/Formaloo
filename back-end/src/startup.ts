import express from "express";

export const makeApp = () => {
    const app = express();

    app.use(express.json());

    // routes here.
    
    app.use((req, res) => {
        res.status(404).send({message: "Page not found"});
    });
    return app;
}