import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, subtotal, tax, total } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div>
              <p>{item.name} x {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <hr />
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (8.16%): ${tax.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default CartPage;