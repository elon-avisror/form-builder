import React from 'react';
import DataTable from '../shared/DataTable';
import axios from 'axios';
import { FormAPI } from '../api/FormAPI';
import { LabelTypes } from '../api/LabelAPI';

interface FormsListPageProps {};

interface FormsListPageState {
    headings: string[];
    rows: React.ReactText[][];
    types: LabelTypes[];
};

export default class FormsListPage extends React.Component<FormsListPageProps, FormsListPageState> {
    constructor(props: Readonly<FormsListPageProps>) {
        super(props);
        this.state = {
            headings: [],
            rows: [],
            types: []
        }
    }

    componentDidMount = async () => {
        const headings = [
            'Form ID',
            'Form Name',
            'Number of Submissions',
            'Link to Form Submit Page',
            'Link to Form Submissions List Page'
        ];

        try {
            const API_URL_FORM_LIST = 'https://api.form-builder.com:4000/form/list';
            const response = await axios.get(API_URL_FORM_LIST);
            const dataResponse = response.data;
            if (dataResponse.ok && Array.isArray(dataResponse.data) && dataResponse.data.length > 0) {
                const forms: FormAPI[] = dataResponse.data;

                const rows: React.ReactText[][] = [];
                const types: LabelTypes[] = [];
                forms.forEach((form, index) => {
                    const formRows: React.ReactText[] = [];

                    // Happens only once, for the first form! (setting all headings to text type)
                    if (index === 0)
                        types.push(LabelTypes.Text);

                    formRows.push(form.id);
                    formRows.push(form.name);
                    formRows.push(form.submissions);

                    formRows.push(`http://localhost.com:3000/page/submit.html/${form.id}`);
                    formRows.push(`http://localhost.com:3000/page/submissions.html/${form.id}`);

                    // TODO:
                    // 1. Create a link to Form Submit Page (by this form.id)
                    // 2. Create a link to Form Submissions List Page (by this form.id)
                    // Examples:
                    // 1. http://localhost.com:3000/page/submit/1
                    // 2. http://localhost.com:3000/page/submissions/1

                    rows.push(formRows);
                });

                this.setState({ headings, rows });
            }
        } catch (err) {
            console.error('[FormsListPageComponenet]', 'GetFormsList', err);
        }
    }

    render = (): JSX.Element => {

        return (
            <div>
                <h1>Forms List Page</h1>
                <DataTable headings={this.state.headings} rows={this.state.rows} types={this.state.types} />
            </div>
        );
    }
};