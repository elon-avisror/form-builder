import React from "react";
import Wizard from "../shared/Wizard";
// import Container from "../shared/Container";
/*
TODO: a container of:
1. Field label
2. Input name
3. Input type
4. Submit button in otder to save this form
*/

interface BuilderPageState {};

interface BuilderPageProps {};

export default class BuilderPage extends React.Component<BuilderPageProps, BuilderPageState> {
    render = (): JSX.Element => {
        return (
            <div>
                <h1>Builder Page</h1>
                <Wizard />
                {/* <Container /> */}
            </div>
        );
    }
};