export const userReducer = (state = { actions: 5 }, action) => {
  switch (action.type) {
    case "USE_ACTION":
      return {
        ...state,
        actions: state.actions - 1
      };

    default:
      return state;
  }
};
