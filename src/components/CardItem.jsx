import React, { Component } from 'react';

class CardItem extends Component {
    constructor(props) {
        super(props)
    }
    increaseItem = (e,item) => {
        e.stopPropagation();
        let quantity = this.props.item.quantity + 1;
        this.props.handleSetQuantity(this.props.item,quantity);
    }

    descreaseItem = (e,item) => {
        e.stopPropagation();
        if(this.props.item.quantity > 0) {
            let quantity = this.props.item.quantity - 1;
            this.props.handleSetQuantity(this.props.item,quantity);

        }
    }
    render() {
        let { item } = this.props;
        return (
            <tr>
                <td>
                    { item.name }
                </td>
                <td className="d-flex align-items-center justify-content-between">
                    <button className="btn btn-sm btn-secondary" onClick={ (e,item) => this.descreaseItem(e,item)}>
                        <i className="fa fa-minus" />
                    </button>
                    { item.quantity }
                    <button className="btn btn-sm btn-default" onClick={ (e,item) => this.increaseItem(e,item)}>
                        <i className="fa fa-plus" />
                    </button>
                </td>
                <td>
                    { item.price }
                </td>
                <td>
                   { item.price * item.quantity }đ
                </td>
            </tr>
        );
    }
}

export default CardItem;