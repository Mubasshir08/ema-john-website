import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
const [cart , setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map (key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
        // console.log(productKeys);
    } , []);
    const removedItem = (key) => {
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
        // console.log(key);
    }

    const handleOrder = () =>{
        setCart([]);
        processOrder()
    }
    // console.log(cart);
    return (
        <div className="shop-container">
            <div className="product-container">
            {cart.map(pd => <ReviewItem key ={pd.key} product = {pd} removedItem = {removedItem}></ReviewItem>)}

            </div>
            <div className="cart-container">
                <Cart items = {cart.length} cart = {cart} isPlacingOrder = {true} handleOrder = {handleOrder}></Cart>
            </div>
        </div>    
    );
};



export default Review;