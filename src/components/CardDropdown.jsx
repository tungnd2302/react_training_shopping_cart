import React, { Component } from 'react';
import CardItem from './CardItem';
import CardTotal from './CardTotal';

class CardDropdown extends Component {
    render() {
        let { cart,handleSetQuantity}  = this.props;
        // console.log(cart);
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-shopping-cart" />
                </button>
                { cart.length > 0 ?
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ top: '0px', left: '-240px', width: '500px', padding: '0px 10px' }}>
                        <p className="text-center mt-3" style={{ fontSize: '16px', fontWeight: "500"}}>Danh sách giỏ hàng</p>
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <td>Tên sản phẩm</td>
                                <td>Số lượng</td>
                                <td>Đơn giá</td>
                                <td>Thành tiền</td>
                            </tr>
                                {
                                    cart.map((value,index) => (
                                        <CardItem 
                                        key={index} 
                                        item = {value} 
                                        handleSetQuantity = { (item,quantity) => handleSetQuantity(item,quantity)} 
                                        />
                                    ))
                                }
                                <CardTotal cart = { cart } />
                            </tbody>
                        </table>
                    </div>
                :
                <div className="dropdown-menu dropdown-menu-right p-3 text-center" aria-labelledby="dropdownMenuButton" style={{ top: '0px', left: '-240px', width: '500px', padding: '0px 10px' }}>
                    <h5 className="m-0" style={{ fontSize: "16px"}}>Bạn chưa có sản phẩm nào trong giỏ</h5>
                </div>
                }
            </div>
        );
    }
}

export default CardDropdown;