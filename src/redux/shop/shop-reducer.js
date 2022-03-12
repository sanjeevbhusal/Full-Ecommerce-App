const initialState = {
  shopData: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS":
      return {
        ...state,
        shopData: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
