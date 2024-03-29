import CartActions from "./cart.types";
import {
    addItemToCart,
    removeItemFromCart
} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActions.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActions.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActions.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            };
        case CartActions.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(
                    cartItem=>cartItem.id!==action.payload.id
                )
            };
        case CartActions.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }
            default:
                return state;
    }
}

export default cartReducer;