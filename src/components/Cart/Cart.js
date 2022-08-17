import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((total , products) => total + products.price , 0);
    totalPrice = Number(totalPrice.toFixed(2))
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
        </div>
    );
};

export default Cart;