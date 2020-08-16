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

    router.post('/create', async (req, res) => {
        try {
            const {
                name,
                submissions,
                user_id
            } = req.body;
            const user = await formService.getOwner(parseInt(user_id));
            if (!user)
                return res.send(getResponseObject('User not found.'));
            
            const form = await formService.create(user.id, name, submissions);
            res.send(getResponseObject(null, form));
        } catch (err) {
            console.error('[FormRouter]', 'Submit', err);
            res.send(getResponseObject());
        }
    });

    return router;
};