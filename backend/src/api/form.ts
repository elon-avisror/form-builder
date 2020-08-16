import { FormService } from "../services/form";
import { Router } from "express";
import { getResponseObject } from ".";

export function FormRouter(formService: FormService) {
    const router = Router();

    router.post('/submit', async (req, res) => {
        try {
            res.send(getResponseObject(null, true));
        } catch (err) {
            console.error('[FormRouter]', 'Submit', err);
            res.send(getResponseObject());
        }
    });
    return router;
};