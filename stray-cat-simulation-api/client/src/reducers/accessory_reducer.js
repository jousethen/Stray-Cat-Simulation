export const accessoryReducer = (state = { accessories: [] }, action) => {
  switch (action.type) {
    case "LOADING_ACCESSORIES":
      return {
        ...state,
      };
    case "LOAD_ACCESSORIES_SUCCESS":
      return {
        ...state,
        actions: action.accessories
      }
    default:
      return state;
  }
};
