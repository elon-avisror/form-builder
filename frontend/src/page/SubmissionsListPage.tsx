import React from "react";
import axios from "axios";
import DataTable from "../shared/DataTable";
import { SubmissionAPI } from "../api/SubmissionAPI";
import { LabelTypes } from "../api/LabelAPI";

interface SubmissionsListPageProps {
    form_id: number;
};

interface SubmissionsListPageState {
    headings: string[];
    rows: React.ReactText[][];
    types: LabelTypes[];
};

export default class SubmissionsListPage extends React.Component<SubmissionsListPageProps, SubmissionsListPageState> {
    constructor(props: Readonly<SubmissionsListPageProps>) {
        super(props);
        this.state = {
            headings: [],
            rows: [],
            types: []
        }
    }

    componentDidMount = async () => {
        const params = {
            // form_id: this.props.form_id
            form_id: 1
        };

        try {
            const API_URL_FORM_LIST = 'https://api.form-builder.com:4000/submission/list';
            const response = await axios.get(API_URL_FORM_LIST, { params });
            const dataResponse = response.data;
            if (dataResponse.ok && Array.isArray(dataResponse.data) && dataResponse.data.length > 0) {
                const submissions: SubmissionAPI[] = dataResponse.data;

                const headings: string[] = [];
                const rows: React.ReactText[][] = [];
                const types: LabelTypes[] = [];
                submissions.forEach((submission, index) => {
                    const submissionRows: React.ReactText[] = [];
                    submission.labels.forEach(label => {
                        // Happens only once, for the first submission! (getting the headings from the labels)
                        if (index === 0) {
                            headings.push(label.name);
                            types.push(label.type);
                        }
                        submissionRows.push(label.value);
                    });
                    rows.push(submissionRows);
                });
                this.setState({ headings, rows, types });
            }
        } catch (err) {
            console.error('[SubmissionsListPageComponent]', 'GetSubmissionsList', err);
        }
    }

    render = (): JSX.Element => {
        return (
            <div>
                <h1>Submissions List Page</h1>
                <DataTable headings={this.state.headings} rows={this.state.rows} types={this.state.types} />
            </div>
        );
    }
};