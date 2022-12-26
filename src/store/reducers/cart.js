import { ADD_ITEM_TO_CART } from "../actions/cart";

const initState = {
  items: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, items: [...state.items, action.payload] };

    default:
      return state;
  }
};

export default reducer;
