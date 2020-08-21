import React from 'react';
import logo from '../logo.svg';

export default class HomePage extends React.Component {
    render = (): JSX.Element => {
        return (
            <div>
                <h1>Form Builder</h1>
                <p>In Architecture Thinking... &#169; Elon Avisror</p>
                <img src={logo} className='App-logo' alt='logo' />
                <p><b>Built with React</b></p>
            </div>
        );
    }
};