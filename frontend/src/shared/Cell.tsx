import * as React from 'react';
import { Link } from 'react-router-dom';
import { LabelTypes } from '../api/LabelAPI';

interface CellProps {
    key: string;
    content: React.ReactText;
    header: boolean;
    name: string;
    type: LabelTypes;
};

export default class Cell extends React.Component<CellProps> {
    constructor(props: Readonly<CellProps>) {
        super(props);
        this.state = {};
    }

    private validURL = (str: string): boolean => {
        const pattern = new RegExp('^(https?:\\/\\/)?'          + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'  + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'                       + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'                   + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'                          + // query string
            '(\\#[-a-z\\d_]*)?$', 'i');                           // fragment locator
        return !!pattern.test(str);
    }

    render = (): JSX.Element => {
        return (
            this.props.header ?
                (
                    <th className="Cell Cell-header">
                        {this.props.content}
                    </th>
                )
                :
                typeof this.props.content === 'string' && this.validURL(this.props.content) ?
                    (
                        <td className="Cell" itemType={this.props.type}>
                            <Link style={{ color: "blue" }} to={this.props.content.replace('http://localhost.com:3000', '')}>View button</Link>
                        </td>
                    )
                    :
                    (
                        <td className="Cell" itemType={this.props.type}>
                            {this.props.content}
                        </td>
                    )
        );
    }
};