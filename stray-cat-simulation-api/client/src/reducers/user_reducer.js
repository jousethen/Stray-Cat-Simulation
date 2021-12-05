export const userReducer = (state = { actions: 5, loadingNextDay: false }, action) => {
  switch (action.type) {
    case "USE_ACTION":
      return {
        ...state,
        actions: state.actions - 1
      };
    case "LOADING_NEXT_DAY":
      return {
        ...state,
        loadingNextDay: true,
      };

    case "WAIT_TO_CONTINUE":
      //Wait for user to press continue 
      //Button in the App component to
      // signify that it's ready to load the next day
      return {
        ...state,
        loadingNextDay: true,
      };

    case "LOADED_NEXT_DAY":
      return {
        ...state,
        loadingNextDay: false,
      };
    default:
      return state;
  }
};
