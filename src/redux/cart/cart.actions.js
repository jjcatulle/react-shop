import CartActions from "./cart.types";

export const toggleCartHidden=()=>({
    type:CartActions.TOGGLE_CART_HIDDEN
});
export const addItemToCart=item=>({
    type:CartActions.ADD_ITEM_TO_CART,
    payload:item
});
