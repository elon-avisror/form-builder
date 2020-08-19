import { Router } from "express";
import { getResponseObject } from ".";
import { SubmissionService } from "../services/submission";

export function SubmissionRouter(submissionService: SubmissionService) {
    const router = Router();

    router.get('/list', async (req, res) => {
        try {
            const form_id = parseInt(req.query.form_id as string);
            const formSubmissions = await submissionService.get(form_id);
            if (!(Array.isArray(formSubmissions)))
                return res.send(getResponseObject());
            res.send(getResponseObject(null, formSubmissions));
        } catch (err) {
            console.error('[SubmitRouter]', 'List', err);
            res.send(getResponseObject());
        }
    });

    return router;
};