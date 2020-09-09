import React from "react";
import { connect } from "react-redux";
import { selectItems, selectCartTotal } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";
import StripeCheckoutButton from "../../components/stripe-button/stripeCheckout";

import "./checkout.scss";

const CheckOut = ({ total, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">Total : ${total}</div>

    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectItems,
});

export default connect(mapStateToProps)(CheckOut);
