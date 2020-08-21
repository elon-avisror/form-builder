import { Router } from "express";
import { getResponseObject } from ".";
import { SubmissionService } from "../services/submission";
import { SubmissionType } from "../base/Submission";

export function SubmissionRouter(submissionService: SubmissionService) {
    const router = Router();

    router.get('/get', async (req, res) => {
        try {
            const form_id = parseInt(req.query.form_id as string);
            const [blankSubmission] = await submissionService.get(form_id, SubmissionType.Blank);
            if (!blankSubmission)
                return res.send(getResponseObject());
            const name = await submissionService.getFormName(form_id);
            const blankForm = {
                ...blankSubmission,
                name
            }
            res.send(getResponseObject(null, blankForm));
        } catch (err) {
            console.error('[SubmissionRouter]', 'GetBlank', err);
            res.send(getResponseObject());
        }
    });

    router.get('/list', async (req, res) => {
        try {
            const form_id = parseInt(req.query.form_id as string);
            const formSubmissions = await submissionService.get(form_id, SubmissionType.Submited);
            if (!(Array.isArray(formSubmissions)))
                return res.send(getResponseObject());
            res.send(getResponseObject(null, formSubmissions));
        } catch (err) {
            console.error('[SubmitRouter]', 'ListSubmited', err);
            res.send(getResponseObject());
        }
    });

    return router;
};