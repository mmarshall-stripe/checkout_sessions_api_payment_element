import React, { useState } from 'react';
import {PaymentElement, useCheckout } from '@stripe/react-stripe-js';
import PayButton  from './PayButton';

const CheckoutForm = () => {
  const checkout = useCheckout();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await checkout.confirm()
    setIsLoading(false);
    if (error){
      console.log(error)
      setMessage(error.message);
      }
    }

  return (
    <div className='checkout-container'>
     <div clasName='checkout-container-inner'>
      <form id="payment-form" onSubmit={handleSubmit}>
       <h1>Checkout</h1>
       <PaymentElement id="payment-element" />
       <PayButton 
         handleSubmit={handleSubmit}
         isLoading={isLoading}
         canConfirm={checkout.canConfirm}
       />
       <p>
         {
           message || ''
         }
       </p>
      </form>
     </div>
    </div>
  );
}

export default CheckoutForm;