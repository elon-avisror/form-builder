import React from 'react';
import axios from 'axios';
import { LabelAPI, LabelTypes } from '../api/LabelAPI';
import { ChangeEvent, SubmitEvent } from './EventTypes';

interface WizardProps {
    history: string[];
};

interface WizardState {
    formName: string;
    labels: LabelAPI[];
    selected: LabelTypes;
};

export default class Wizard extends React.Component<WizardProps, WizardState> {
    constructor(props: Readonly<WizardProps>) {
        super(props);
        this.state = {
            formName: '',
            labels: [],
            selected: LabelTypes.Text
        };
    }

    private handleSelect = (event: ChangeEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        const labels = this.state.labels.map(label => {
            if (label.id.toString() === name)
                label.type = value;
            return label;
        });
        this.setState({ labels });
    }

    private handleChange = (event: ChangeEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (event.target.name) {
            case 'form-name':
                const formName = value;
                this.setState({ formName });
                break;
            default:
                const labels = this.state.labels.map(label => {
                    if (label.id.toString() === name)
                        label.name = value;
                    return label;
                });
                this.setState({ labels });
                break;
        }
    }

    private handleAddClick = () => {
        const labels = this.state.labels;
        const newEmptyLabel: any = {
            id: labels.length,
            type: LabelTypes.Text,
            name: ''
        }
        labels.push(newEmptyLabel);
        this.setState({ labels });
    }

    private handleRemoveClick = () => {
        const labels = this.state.labels;
        labels.pop();
        this.setState({ labels });
    }

    private handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();
        const API_URL_CREATE_FORM = 'https://api.form-builder.com:4000/form/create';
        const params = {
            name: this.state.formName,
            labels: this.state.labels
        };
        try {
            const response = await axios.post(API_URL_CREATE_FORM, params);
            if (!response || !response.data.ok) {
                alert('Somthing went wrong, try again later.');
                return;
            }
            alert(`Congrats, You have successfully built ${this.state.formName} form!`);
            this.props.history.push(`/page/forms`);
        } catch (err) {
            console.error('[WizardComponent]', 'PostCreateForm', err);
        }
    }

    render() {
        return (
            <div>
                <b><p>Form Name</p></b>
                <h2>
                    <input
                        type='text'
                        name='form-name'
                        value={this.state.formName}
                        onChange={this.handleChange}
                    />
                </h2>
                <b><legend>Form Fields</legend></b>
                <fieldset style={{display: 'inline-block'}}>
                <button onClick={this.handleAddClick}>Add Field</button>
                <button
                    type='button'
                    onClick={this.handleRemoveClick}
                >
                    Remove Field
                </button>
                    <form onSubmit={this.handleSubmit}>
                            {/* Labels container */}
                            {Array.isArray(this.state.labels) && this.state.labels.length > 0 ?
                                this.state.labels.map((label, index) => {
                                    return (
                                        <fieldset key={index.toString()}>
                                            <select name={label.id.toString()} onChange={this.handleSelect}>
                                                <option value='text'>text</option>
                                                <option value='date'>date</option>
                                                <option value='email'>email</option>
                                                <option value='tel'>tel</option>
                                                <option value='number'>number</option>
                                            </select>
                                            <input
                                                name={label.id.toString()}
                                                value={label.value}
                                                onChange={this.handleChange}
                                            />
                                        </fieldset>
                                    )
                                })
                            :
                                <div>
                                    <b>Add new fields by clicking 'Add Field' button.</b>
                                </div>
                            }
                        <input name='create-form' type='submit' />
                    </form>
            </fieldset>
            </div>
        );
    }
};