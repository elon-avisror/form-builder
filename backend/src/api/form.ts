import { FormService } from "../services/form";
import { Router } from "express";
import { getResponseObject } from ".";

export function FormRouter(formService: FormService) {
    const router = Router();

    router.get('/list', async (req, res) => {
        try {
            const forms = await formService.get();
            res.send(getResponseObject(null, forms));
        } catch (err) {
            console.error('[FormRouter]', 'List', err);
            res.send(getResponseObject());
        }
    });

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