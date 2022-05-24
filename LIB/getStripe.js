import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51HtziwHiY8OZkpAKp18fvNYKOpiYuFnx7ooEfGGOWH4SM1dZq7XxyWPMeeS4K7c2bXyNWzGAMEu14Q3NHnpvYYOU00k1hTyfoc');
  }

  return stripePromise;
}

export default getStripe;