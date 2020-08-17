import { Router } from "express";
import { getResponseObject } from ".";
import { LabelService } from "../services/label";

export function LabelRouter(labelService: LabelService) {
    const router = Router();

    router.post('/create', async (req, res) => {
        try {
            const { form_id, name, type, value } = req.body;
            const createdLabel = await labelService.create(
                form_id,
                name,
                type,
                value
            );
            res.send(getResponseObject(null, createdLabel));
        } catch (err) {
            console.error('[LabelRouter]', 'Create', err);
            res.send(getResponseObject());
        }
    });

    return router;
};