# Stripe Checkout Sessions API with Payment Element

This lightweight React.JS app renders a Payment Element for a given Checkout Session. This is intended as a standalone client application with no supporting server; the Checkout Session is created elesewhere via the Stripe API e.g. using CLI/Postman and the client_secret of the Checkout Session is manually updated in the code before it is rerun. The app is only useful for basic development flows.

## Setup

1. Run `yarn install` to install the packages
2. Update App.js with the [client_secret](https://docs.stripe.com/api/checkout/sessions/object#checkout_session_object-client_secret) for the Checkout Session on line 11 and the [publishable key](https://docs.stripe.com/keys?locale=en-GB) for the Stripe Account on line 12.
3. Run `yarn start`
4. Complete the checkout using a [Stripe test card](https://stripe.com/testing)

## Appendix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
