import React, { FormEvent, ChangeEvent } from "react";

interface FormsTempProps {};

interface FormsTempState {
    username: string;
};

export default class FormsTemp extends React.Component<FormsTempProps, FormsTempState> {
    constructor(props: Readonly<FormsTempProps>) {
        super(props);
        this.state = { username: '' };
      }

    myChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({username: event.target.value});
    }

    mySubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        // if somehow somthing went wrong => prevent submit bt next command
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }

    render(): JSX.Element {
        let header: any = '';
        if (this.state.username) {
          header = <h1>Hello {this.state.username}</h1>;
        } else {
          header = '';
        }

        return (
            <div>
                <h1>Forms List Page</h1>
                <h2>TODO</h2>
                <p>This page will include a list of all forms and also a link to create a new form.
                    The list of forms is a table with the following columns:</p>
                <p>1. Form id</p>
                <p>2. Form Name</p>
                <p>3. Number of Submissions</p>
                <p>4. link to Form Submit Page</p>
                <p>5. link to Form Submissions list Page</p>


                <form onSubmit={this.mySubmitHandler}>
                    <h1>{header}</h1>
                    <p>Enter your name, and submit:</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>
        );
    }
};