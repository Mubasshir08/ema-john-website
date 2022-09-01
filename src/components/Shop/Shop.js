import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
        const first10 = fakeData.slice(0,10);
        const [products , setProducts] = useState(first10);
        const [cart , setCart] = useState([]);

        useEffect(()=> {
            const savedCart = getDatabaseCart();
            const keys = Object.keys(savedCart);
            const previousCart = keys.map((existingKey) => {
                const product = fakeData.find(pd => pd.key === existingKey);
                product.quatity = savedCart[existingKey];
                // console.log(product);
                return product;
            })
            // console.log(keys);
            setCart(previousCart);
        } , [])

        const handleProduct = (product) => {
          const toBeAdded = product.key;
          const sameProduct = cart.find(pd => pd.key === toBeAdded);
        //   console.log(sameProduct);
                let count = 1 ;  
                let newCart; 
          if(sameProduct){
            count = sameProduct.quatity;
            sameProduct.quatity = count;
            const otherProduct = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...otherProduct , sameProduct];
          }

          else{
            product.quatity = 1;
            newCart = [...cart , product]
          }

          setCart(newCart);
          addToDatabaseCart(product.key , count)
        }
    return (
        <div className="shop-container">
            <div className="product-container">

                    {products.map(product => <Product product = {product} key = {product.key} showAddToCart = {true} handleProduct = {handleProduct}></Product>)};
                    
            </div>
            <div className="cart-container">
                <Cart items = {cart.length} cart = {cart} isPlacingOrder = {false}></Cart>
            </div>
        </div>
    );
};

export default Shop;