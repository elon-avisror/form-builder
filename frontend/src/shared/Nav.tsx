import React from "react";
import { Link } from "react-router-dom";

interface NavProps {};

interface NavState {};

export default class Nav extends React.Component<NavProps, NavState> {
    constructor(props: Readonly<NavProps>) {
        super(props);
        this.state = {
            match: {}
        };
    }

    render = (): JSX.Element => {
        return (
            <ul className="Nav-ul">
                <Link className="Nav-li" to="/">Home Page</Link>
                <Link className="Nav-li" to="/page/forms">Forms List Page</Link>
                <Link className="Nav-li" to="/page/builder">Builder Page</Link>
            </ul>
        );
    }
};