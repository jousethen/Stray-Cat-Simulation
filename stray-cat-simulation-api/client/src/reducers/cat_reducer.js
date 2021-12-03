export const catReducer = (state = { cats: [], loading: false }, action) => {
  console.log(action);
  let catIndex;
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

    case "FEED_CAT":
      catIndex = state.cats.findIndex((cat) => {
        return cat.id === action.catId
      });
      state.cats[catIndex].food = state.cats[catIndex].food + 1;
      return {
        ...state,
        cats: [...state.cats],
        loading: false,
      }

    case "HEAL_CAT":
      catIndex = state.cats.findIndex((cat) => {
        return cat.id === action.catId
      });
      state.cats[catIndex].hp = state.cats[catIndex].hp + 1;

      return {
        ...state,
        cats: [...state.cats],
        loading: false,
      }

    case "PET_CAT":
      catIndex = state.cats.findIndex((cat) => {
        return cat.id === action.catId
      });
      state.cats[catIndex].affection = state.cats[catIndex].affection + 1;
      return {
        ...state,
        cats: [...state.cats],
        loading: false,
      }

    default:
      return state;
  }
};
