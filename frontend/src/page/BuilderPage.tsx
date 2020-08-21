import React from "react";
import Wizard from "../shared/Wizard";

/*
TODO: a container of:
1. Field label
2. Input name
3. Input type
4. Submit button in otder to save this form
*/

interface BuilderPageProps {
    history: string[];
};

interface BuilderPageState {};

export default class BuilderPage extends React.Component<BuilderPageProps, BuilderPageState> {
    render = (): JSX.Element => {
        return (
            <div>
                <h1>Builder Page</h1>
                <Wizard history={this.props.history} />
            </div>
        );
    }
};