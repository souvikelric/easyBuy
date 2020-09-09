import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectItemCount = createSelector([selectItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
