import React, { useState } from 'react';
import '../Shop/Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
        const first10 = fakeData.slice(0,10);
        const [products , setProducts] = useState(first10);
        const [cart , setCart] = useState([]);
        const handleProduct = (product) => {
            // console.log(product)
            setCart([...cart , product])
        }
    return (
        <div className="shop-container">
            <div className="product-container">

                    {products.map(product => <Product product = {product} handleProduct = {handleProduct}></Product>)};
                    
            </div>
            <div className="cart-container">
                <Cart items = {cart.length} cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;