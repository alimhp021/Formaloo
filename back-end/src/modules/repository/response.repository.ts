import mongoose, { Model } from "mongoose";
import { makeDataHandler } from "../../database/data-handler";
import { responsesSchemaObject } from "../models/response-schema";

export class ResponseRepository {
    private responses: Model<any>;
    constructor(private dataHandler: typeof import("mongoose")) {
        const responsesSchema = new mongoose.Schema(responsesSchemaObject);
        this.responses = dataHandler.model("responses", responsesSchema);
    }
}