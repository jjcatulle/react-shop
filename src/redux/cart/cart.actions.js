import CartActions from "./cart.types";

const toggleCartHidden=()=>({
    type:CartActions.TOGGLE_CART_HIDDEN
});
export const addItemToCart=item=>({
    type:CartActions.ADD_ITEM_TO_CART,
    payload:item
})

export default toggleCartHidden;