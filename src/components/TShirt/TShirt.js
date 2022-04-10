import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const { handleAddToCart, tshirt } = props
    const { name, price, picture } = props.tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price : $ {price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;