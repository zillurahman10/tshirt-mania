import React, { useState } from 'react';
import useTShirts from '../../Hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTShirts()
    const [cart, setcart] = useState([])

    const handleAddToCart = selectedItem => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setcart(newCart)
        }
        else {
            alert('Item already added')
        }
    }

    const handleRemoveFromCart = selectedItem => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
        setcart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt tshirt={tshirt} key={tshirt._id} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;