import mongoose, { Model } from "mongoose";
import { makeDataHandler } from "../../database/data-handler";
import { formsSchemaObject } from "../models/forms-schema";

export class FormRepository {
    private forms: Model<any>;
    constructor(private dataHandler: typeof import("mongoose")) {
        const formsSchema = new mongoose.Schema(formsSchemaObject);
        this.forms = dataHandler.model("forms", formsSchema);
    }

    getForms = async () => {
        return this.forms.find();
    }
}