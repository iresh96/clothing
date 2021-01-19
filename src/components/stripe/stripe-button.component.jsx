import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51IBOoGBvRlJimRYCOihtrHG3EWYuFI1FIiqIQeMDuGKdEWy0ZZqngJTUM7fRwhWrRgGPQPXEGHSw0Scy7YLBmvhd00wTOxe6nL";

  const onToken = (token) => {
    console.log(token);
    alert("payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SIM CLOTHING PVT LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
