import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { cart } = this.props;
        let existOnCard = true;
        if (cart.length > 0) {
            cart.forEach((cart, index) => {
                if (cart.id == this.props.fruit.id) {
                    existOnCard = false; // Tồn tại trong cart
                }
            })
        }

        let button = null;
        if (existOnCard) {
            button = <button className="btn btn-primary btn-sm mt-2" onClick={(fruit) => this.props.onAddToCart(this.props.fruit)}>
                        <i className="fa fa-plus mr-2" /> Thêm vào giỏ
                    </button>
        } else {
            button = <button className="btn btn-secondary btn-sm mt-2" onClick={(fruit) => this.props.onAddToCart(this.props.fruit)}>
                        <i className="fa fa-minus mr-2" /> Xóa khỏi giỏ
                    </button>
        }
        return (
            <div className="col-md-2 text-center item mt-4">
                <img className="img-fluid" alt="alternative" src={this.props.fruit.thumb} />
                <div className="item-detail">
                    <p className="m-0">{this.props.fruit.name}</p>
                    <p className="m-0">8.000 VND</p>
                    { button }
                </div>
            </div>
        );
    }
}

export default Item;