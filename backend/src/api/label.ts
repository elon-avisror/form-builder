import { Router, json as expressJson } from "express";
import { getResponseObject } from ".";
import { LabelService } from "../services/label";

export function LabelRouter(labelService: LabelService) {
    const router = Router();

    router.post('/create', expressJson(), async (req, res) => {
        try {
            const { form_id, name, type, value } = req.body;
            const createdLabel = await labelService.create(
                form_id,
                name,
                type,
                value
            );
            if (!createdLabel)
                return res.send(getResponseObject());
            res.send(getResponseObject(null, createdLabel));
        } catch (err) {
            console.error('[LabelRouter]', 'Create', err);
            res.send(getResponseObject());
        }
    });

    // TODO: not for now!
    router.get('/list', async (req, res) => {
        try {
            const form_id = parseInt(req.query.form_id as any);
            const formLabels = await labelService.get({ form_id });
            res.send(getResponseObject(null, formLabels));
        } catch (err) {
            console.error('[LabelRouter]', 'List', err);
            res.send(getResponseObject());
        }
    });

    return router;
};