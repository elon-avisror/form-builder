import React from "react";

interface HomeTempProps {};

interface HomeTempState {};

export default class HomeTemp extends React.Component<HomeTempProps, HomeTempState> {
    render = (): JSX.Element => {
        return (
            <div>
                <h1>Form Builder</h1>
                <p>In Architecture Thinking... &#169; Elon Avisror</p>
            </div>
        );
    }
};