import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HOUcnCtXyaqK6xC66fErtjYhvGrFdcfY5DdVq24OAUle1L0Q1ktVDkpOGvM0SuWHpSYHEUdgS3rQe5dOV1v2N3d00UhaTAcxr";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={` Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
