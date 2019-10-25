import CartActions from "./cart.types";

export const toggleCartHidden=()=>({
    type:CartActions.TOGGLE_CART_HIDDEN
});

export const addItemToCart=item=>({
    type:CartActions.ADD_ITEM_TO_CART,
    payload:item
});

export const removeItem =item=>({
    type:CartActions.REMOVE_ITEM,
    payload:item
});

export const clearItemFromCart=item=>({
    type:CartActions.CLEAR_ITEM_FROM_CART,
    payload:item
});

export const clearCart=()=>({
    type:CartActions.CLEAR_CART
});