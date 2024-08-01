import {Express} from "express";
import request from "supertest";
import { makeApp } from "../../src/startup";
import { dataHandler } from "../../src/config";

describe("forms", () => {
    let app: Express;
    beforeAll(() => {
        app = makeApp();
    });
    afterAll(() => {
        dataHandler.disconnect();
    })
    it("should get list of forms", async () => {
        const {body: forms} = await request(app)
        .get("/forms/getFormList")
        .set("authorization", "admin")
        .send()
        .expect(200);

        expect(forms).toStrictEqual([]);
    });
});