import { Router, json as expressJson } from "express";
import { getResponseObject } from ".";
import { FormService } from "../services/form";

export function FormRouter(formService: FormService) {
    const router = Router();

    router.post('/create', expressJson(), async (req, res) => {
        try {
            const form = await formService.create(req.body.name);
            res.send(getResponseObject(null, form));
        } catch (err) {
            console.error('[FormRouter]', 'Create', err);
            res.send(getResponseObject());
        }
    });

    router.get('/submission', async (req, res) => {
        try {
            const form_id = parseInt(req.query.form_id as string);
            const [submissionForm] = await formService.get({ form_id });
            res.send(getResponseObject(null, submissionForm));
        } catch (err) {
            console.error('[FormRouter]', 'Submission', err);
            res.send(getResponseObject());
        }
    });

    router.post('/submit', expressJson(), async (req, res) => {
        try {
            const form_id = parseInt(req.body.form_id);
            const labels = req.body.labels;
            const form = await formService.get({ form_id });
            if (!(form || Array.isArray(req.body.labels)))
                return res.send(getResponseObject());
            const submitedForm = await formService.submit(form_id, labels);
            res.send(getResponseObject(null, submitedForm));
        } catch (err) {
            console.error('[FormRouter]', 'Submit', err);
            res.send(getResponseObject());
        }
    });

    router.get('/list', async (req, res) => {
        try {
            const forms = await formService.get();
            res.send(getResponseObject(null, forms));
        } catch (err) {
            console.error('[FormRouter]', 'List', err);
            res.send(getResponseObject());
        }
    });

    return router;
};