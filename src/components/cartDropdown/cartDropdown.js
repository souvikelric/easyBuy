import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { selectItems } from "../../redux/cart/cartSelectors";
import CartItem from "../cartItem/cartItem";

import CustomButton from "../custom-button/custom-button";
import "./cartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <div className="empty-message">Your cart is empty</div>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartDropdown());
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
