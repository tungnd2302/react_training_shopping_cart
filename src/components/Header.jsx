import React, { Component } from 'react';
import CardDropdown from './CardDropdown';

class Header extends Component {
    render() {
        let { cart,handleSetQuantity } = this.props;
        return (
            <div className="row mt-4">
                <div className="col-md-12 d-flex justify-content-between">
                    <h3>Shopping Cart</h3>
                    <CardDropdown 
                        handleSetQuantity = { (item,quantity) => handleSetQuantity(item,quantity)}
                        cart = { cart }
                    />
                </div>
            </div>
        );
    }
}

export default Header;