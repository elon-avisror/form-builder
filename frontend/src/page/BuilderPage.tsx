import React from 'react';
import Wizard from '../shared/Wizard';

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