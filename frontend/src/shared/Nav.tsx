import React from "react";

interface NavProps {};

interface NavState {};

export default class Nav extends React.Component<NavProps, NavState> {
    render(): JSX.Element {
        return (
            <ul>
                <li><a href="/">Home Page</a></li>
                <li><a href="/page/forms.html">Forms List Page</a></li>
                <li><a href="/page/builder.html">Builder Page</a></li>
            </ul>
        );
    }
};