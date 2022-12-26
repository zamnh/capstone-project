import { ADD_HOBBY } from "../actions/hobby";

const initState = {
  hobbies: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_HOBBY:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
