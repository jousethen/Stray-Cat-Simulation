export const catReducer = (state = { cats: [], loading: false }, action) => {
  console.log(action)
  switch (action.type) {
    case "LOADING_CATS":
      return {
        ...state,
        cats: state.cats,
        loading: true,
      };
    case "LOAD_CATS_SUCCESS":
      return {
        ...state,
        cats: action.cats,
        loading: false,
      }
    default:
      return state;
  }
};
