import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js';

const PayButton = ({ handleSubmit, isLoading }) => {
    const checkout = useCheckout();

  return (
    <div className="pay-button-container">
      <button disabled onClick={handleSubmit}>
        Pay {checkout.total.total.amount}
      </button>
    </div>
  )
};

export default PayButton;