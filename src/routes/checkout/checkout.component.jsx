import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/card.context';

import './checkout.styles.scss';

const Ceheckout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        //const { id, name, quantity } = cartItem;

        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <spann className='total'>Total: ${cartTotal} </spann>
    </div>
  );
};

export default Ceheckout;
