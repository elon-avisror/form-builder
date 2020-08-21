import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
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