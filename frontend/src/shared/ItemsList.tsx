import React from "react";
import { Item } from "./Item";

interface ItemsListProps {
    items: Item[];
};

interface ItemsListState {};

export default class ItemsList extends React.Component<ItemsListProps, ItemsListState> {
    constructor(props: Readonly<ItemsListProps>) {
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        return (
            <ul className="List-Item-ul">
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
};