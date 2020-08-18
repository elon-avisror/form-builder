import React from "react";

interface NavProps {};

interface NavState {};

export default class Nav extends React.Component<NavProps, NavState> {
    render(): JSX.Element {
        return (
            <div>
                <li><a href="/">Home Page</a></li>
                <li><a href="/forms.html">Forms List Page</a></li>
                <li><a href="/builder.html">Builder Page</a></li>
                <li><a href="/submit.html">Submit Page</a></li>
                <li><a href="/submissions.html">Submissions List Page</a></li>
            </div>
        );
    }
};