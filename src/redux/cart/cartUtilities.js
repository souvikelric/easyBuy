export const addCartItems = (cartItems, ItemToAdd) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === ItemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === existingItem.id
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...ItemToAdd, quantity: 1 }];
  }
};

export const removeCartItems = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingItem.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === existingItem.id
        ? { ...cartItem, quantity: existingItem.quantity - 1 }
        : cartItem
    );
  }
};
