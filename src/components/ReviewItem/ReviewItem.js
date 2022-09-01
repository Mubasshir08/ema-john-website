import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    // console.log(props.product);
    const {name , img , quantity , key, price} = props.product;
    // console.log(key);
    return (
        <div className='review-item-style'>
            <h3 className = 'product-name'> {name} </h3>
            <p>Quantity : {quantity}</p>
            <p>Price : {price}</p>
            <br />
            <button className='main-btn' onClick={() => props.removedItem(key)}> Remove </button>
        </div>
    );
};



export default ReviewItem;