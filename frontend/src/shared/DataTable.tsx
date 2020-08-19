import * as React from 'react';
import Cell from './Cell';

interface DataTableProps {
    headings: string[];
    rows: React.ReactText[][];
};

interface DataTableState {
    
};

export default class DataTable extends React.Component<DataTableProps, DataTableState> {
    renderHeadingRow = (_cell: any, cellIndex: number): JSX.Element => {
        const { headings } = this.props;

        return (
            <Cell
                key={`heading-${cellIndex}`}
                content={headings[cellIndex]}
                header={true}
                name={headings[cellIndex]}
            />
        );
    };
    
    renderRow = (_row: any, rowIndex: number): JSX.Element => {
        const { headings, rows } = this.props;

        return (
            <tr key={`row-${rowIndex}`}>
                {rows[rowIndex].map((_cell, cellIndex) => {
                    return (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            content={rows[rowIndex][cellIndex]}
                            header={false}
                            name={headings[cellIndex]}
                        />
                    );
                })}
            </tr>
        );
    };

    render = (): JSX.Element => {
        const { headings, rows } = this.props;

        const theadMarkup = (
            <tr key="heading">
                {headings.map(this.renderHeadingRow)}
            </tr>
        );

        const tbodyMarkup = rows.map(this.renderRow);
    
        return (
            <table className="Table">
                <thead>{theadMarkup}</thead>
                <tbody>{tbodyMarkup}</tbody>
            </table>
        );
    }
}