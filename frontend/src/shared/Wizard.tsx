import React from "react";
import ItemsList from "./ItemsList";
import { Item } from "./Item";

interface WizardProps {};

interface WizardState {
    items: Item[];
    text: any;
};

export default class Wizard extends React.Component<WizardProps, WizardState> {
    constructor(props: Readonly<WizardProps>) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange = (e: { target: { value: any; }; }) => {
        this.setState({ text: e.target.value });
    }

    private handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        const newItems: Item[] = [];
        this.state.items.forEach(item => newItems.push(item));
        newItems.push(newItem);
        this.setState({
            items: newItems,
            text: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Create Labels</h2>
                <ItemsList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-label">
                        Label Name
                    </label>
                    <input
                        id="new-label"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add Label
                    </button>
                </form>
            </div>
        );
    }
};