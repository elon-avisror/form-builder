import React from "react";
import { LabelTypes, Label } from "../api/Label";

declare type Item = { id: string | number | null | undefined, text: React.ReactNode };

interface BuilderState {
    items: Label[] | any;
    text: string;
    type: LabelTypes;
};

interface BuilderProps {
    items: Item[];
};

export default class Builder extends React.Component<BuilderProps, BuilderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [],
            text: '',
            type: LabelTypes.Text
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e: { target: { value: any; }; }) {
        this.setState({ text: e.target.value });
    }
    
    handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

    render(): JSX.Element {
        return (
            <div>
                {Array.isArray(this.state.items) && this.state.items.length > 0 ?
                    <ul>
                        {this.props.items.map((item: Item) => (
                            <li key={item.id}>{item.text}</li>
                        ))}
                    </ul>
                    :
                    <div>
                        <h3>TODO</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="new-todo">
                                What needs to be done?
                            </label>
                            <input
                                id="new-todo"
                                onChange={this.handleChange}
                                value={this.state.text}
                            />
                            <button>
                                Add #{this.state.items.length + 1}
                            </button>
                        </form>
                        <h1>Builder Page</h1>
                        <h2>TODO</h2>
                        <p>In this page, you'll implement a wizard to create a form. This wizard will
                            contain a container where you are able to add:</p>
                        <p>* Field label</p>
                        <p>* Input name</p>
                        <p>* Input type</p>
                        <p>* Submit button in order to save this form</p>
                    </div>
                }
            </div>
        );
    }
};