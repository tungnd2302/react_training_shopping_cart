import React, { Component } from 'react';

class CardTotal extends Component {
    render() {
        let { cart } = this.props;
        let total = 0;
        cart.forEach((value,index) => {
            total += value.quantity * value.price
        })
        return (
            <tr>
                <td colSpan={3}>
                    Tổng
                </td>
                <td>{ total }đ</td>
            </tr>
        );
    }
}

export default CardTotal;