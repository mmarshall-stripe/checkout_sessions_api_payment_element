// Package imports
import { CheckoutProvider } from "@stripe/react-stripe-js";
import {
  loadStripe,
} from "@stripe/stripe-js";

// Component imports
import CheckoutForm from './CheckoutForm';

// Consts (===== UPDATE THESE =====)
const clientSecret  = 'cs_test_*****';
const publishableKey = 'pk_test_*****';

// Component
const App = () => {
  const stripe = loadStripe(publishableKey);
  const fetchClientSecret = () => {
    // This is normally where a request to LBG server will be made to create the checkout session via API and return the client secret
    return clientSecret
  };

  return (
    <>
    <CheckoutProvider
      stripe={stripe}
      options={{fetchClientSecret}}
    >
      <CheckoutForm />
    </CheckoutProvider>
    </>
  );
}

export default App;
