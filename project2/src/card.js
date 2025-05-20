import Modalwindow from './modalwindow.js';
import './App.css'
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const Card = function(props){
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({
            id: props.id,
            name: props.title,
            price: Number(props.description),
            quantity: quantity
        });
    };
    return(
        <>
            <section className="card">
                <div className="cardcontainer">
                    <h1>{props.title}</h1>
                    <img src={props.image} alt="" className="cardimg" onClick={() => setShowModal(true)}/>
                    <p>${props.description}</p>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </section>
            {showModal && (
                <Modalwindow
                    title={props.title}
                    image={props.image}
                    description={props.description}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    )
}

export default Card;