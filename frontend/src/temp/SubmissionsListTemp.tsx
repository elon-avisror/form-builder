import React from "react";
import axios from "axios";

interface SubmissionsListTempProps {};

interface SubmissionsListTempState {};

export default class SubmissionsListTemp extends React.Component<SubmissionsListTempProps, SubmissionsListTempState> {
    componentDidMount = async () => {
        try {
            const submissions = await axios.get(`http://127.0.0.1:4000/label/list?form_id=2`);
            console.log(submissions);
        } catch (err) {
            console.error('[SubmissionsListTempComponent]', 'AxiosGet', err);
        }
    }

    render = (): JSX.Element => {
        return (
            <div>
                <h1>Submissions List Page</h1>
                <h2>TODO</h2>
                <p>This page will include a table of all submissionsPage related to a specific form by
                    its id. E​ach header is the field name and each row is a submission with the user
                    input.</p>
            </div>
        );
    }
};