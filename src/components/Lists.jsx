import React, { Component } from 'react';
import Item from './Item';

class Lists extends Component {
    render() {
        return (
            <div className="row mt-2 pb-4">
                {
                    this.props.fruits.map((value, index) => {
                   

                        return <Item
                            onAddToCart={(fruit) => this.props.onAddToCart(fruit)}
                            fruit={value} key={index}
                            cart ={ this.props.cart }
                        />
                    })
                }
            </div>
        );
    }
}

export default Lists;