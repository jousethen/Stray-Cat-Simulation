export const accessoryReducer = (state = { accessories: [] }, action) => {
  switch (action.type) {
    case "LOADING_ACCESSORIES":
      return {
        ...state,
      };
    case "LOAD_ACCESSORIES_SUCCESS":
      return {
        ...state,
        accessories: action.accessories
      }
    case "GIFT_ACCESSORY":
      accIndex = state.accessories.findIndex((acc) => {
        return acc.id === action.accId
      });

      state.accessories[accIndex].cat_id = action.catId

      return {
        ...state,
        accessories: [...state.accessories],
      }
    default:
      return state;
  }
};
