import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let totalPrice = cart.reduce((total , products) => total + (products.price)*(products.quatity) , 0);
    totalPrice = Number(totalPrice.toFixed(2));
    
    let shippingCost = totalPrice;
    if(shippingCost > 35){
        shippingCost = 10;
    }
    else if(shippingCost > 15){
        shippingCost = 4.99;
    }
        const tax = Number((totalPrice/10).toFixed(2));
        const grandTotal = Number ((totalPrice + shippingCost + tax).toFixed(2));
    return (
        <div>
            <h4>Order Summary : {props.items} </h4>
            <p> Price : {totalPrice} </p>
            <p> Shipping Cost : {shippingCost}</p>
            <p>Tax : {tax}</p>
            <p>Total Price : {grandTotal} </p>
            
            { props.isPlacingOrder
                ? <Link to ='/review'>  <button className="main-btn" onClick={() => props.handleOrder()}>Place Order</button> </Link>
                : <Link to ='/review'>  <button className="main-btn">Review Order</button> </Link>
            }
                
        </div>
    );
};

export default Cart;