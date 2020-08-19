import React from "react";

interface SubmitPageProps {};

interface SubmitPageState {
    username: string;
    age: string;
};

interface DinamicState {
    [x: string]: string
};

export default class SubmitPage extends React.Component<SubmitPageProps, SubmitPageState | DinamicState> {
    constructor(props: Readonly<SubmitPageProps>) {
        super(props);
        this.state = {
            username: '',
            age: '',
        };
    }

    myChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render = (): JSX.Element => {
        return (
            <div>
                <h1>Submit Page</h1>
                <h2>TODO</h2>
                <p>In this page, you'll display a specific form by its id.
                    This form must include all the relevant fields and a submit button.
                    On submit, all data will be saved.
                    At the end of the submission process, the user should redirect to ​ forms list
                    page​.</p>
                <form>
                    <h1>Hello {this.state.username} {this.state.age}</h1>
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your age:</p>
                    <input
                        type='text'
                        name='age'
                        onChange={this.myChangeHandler}
                    />
                </form>
            </div>
        )
    }
};