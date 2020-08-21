import React from "react";
import axios from "axios";
import { SubmissionAPI } from "../api/SubmissionAPI";

declare type ChangeEvent = { target: { name: any, value: any } };
declare type SubmitEvent = { preventDefault: () => void };

interface SubmitPageProps {
    history: any[];
    match: { params: { form_id: string } };
};

interface SubmitPageState {
    submission: SubmissionAPI;
};

export default class SubmitPage extends React.Component<SubmitPageProps, SubmitPageState> {
    constructor(props: Readonly<SubmitPageProps>) {
        super(props);
        this.state = {
            submission: {} as SubmissionAPI
        };
    }

    private mySubmitHandler = async (event: SubmitEvent) => {
        event.preventDefault();
        const API_URL_SUBMIT_FORM = 'https://api.form-builder.com:4000/form/submit';
        const params = {
            form_id: this.state.submission.form_id,
            labels: this.state.submission.labels
        };
        try {
            const response = await axios.post(API_URL_SUBMIT_FORM, params);
            if (!response || !response.data.ok) {
                alert('Somthing went wrong, try again later.');
                return this.props.history.push(`/page/submit/${this.state.submission.form_id}`);
            }
            alert(`Congrats, You have successfully submitted ${this.state.submission.name} form!`); // TODO: add form name
            this.props.history.push(`/page/forms`);
        } catch (err) {
            console.error('[SubmitPageComponent]', 'PostSubmitForm', err);
        }
    }

    private myChangeHandler = (event: ChangeEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        const labels = this.state.submission.labels.map((label, index, labels) => {
            if (label.name === name) {
                labels[index].value = value;
            }
            return labels;
        });
        this.setState((submission => ({
            ...submission,
            labels
        })));
    }

    componentDidMount = async () => {
        const params = {
            form_id: this.props.match.params.form_id
        };
        try {
            const API_URL_FORM_SUBMISSION = 'https://api.form-builder.com:4000/submission/get';
            const response = await axios.get(API_URL_FORM_SUBMISSION, { params });
            const dataResponse = response.data;
            if (dataResponse.ok && dataResponse.data) {
                const submission: SubmissionAPI = dataResponse.data;
                this.setState({ submission });
            }
        } catch (err) {
            console.error('[SubmitPageComponent]', 'GetSubmitForm', err);
        }
    }

    render = (): JSX.Element => {
        return (
            <div>
                <h1>Submit Page</h1>
                {this.state.submission ?
                    <form onSubmit={this.mySubmitHandler}>
                        {Array.isArray(this.state.submission.labels) && this.state.submission.labels.length > 0 ?
                            <div>
                                <b><legend>{this.state.submission.name}</legend></b>
                                <fieldset style={{display: "inline-block"}}>
                                    {this.state.submission.labels.map((label, index) => {
                                        return (
                                            <div key={index.toString()}>
                                                <p style={{backgroundColor: "azure"}}>{label.name}</p>
                                                <input
                                                    type={label.type}
                                                    value={label.value}
                                                    name={label.name}
                                                    onChange={this.myChangeHandler}
                                                ></input>
                                            </div>
                                        )
                                    })}
                                </fieldset>
                            </div>
                        :
                            <div></div>
                        }
                        <input style={{display: "initial"}} type="submit"></input>
                    </form>
                :
                    <div></div>
                }
            </div>
        );
    }
};