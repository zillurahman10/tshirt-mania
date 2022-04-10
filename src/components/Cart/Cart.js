import React from 'react';


const Cart = ({ cart, handleRemoveFromCart }) => {

    let command;
    if (cart.length === 0) {
        command = <div><h4>
            When your cart quantity is 5, you will get a prize!!!!!
        </h4>
        </div>
    }
    else if (cart.length === 5) {
        command = <p>Tui kichu pabi na. He He He!!!!!! </p>
    }
    return (
        <div>
            <p>{command}</p>
            {
                cart.map(tshirt => <p>{tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;