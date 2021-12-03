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

      state.cats[catIndex] = feed(state.cats[catIndex])

      return {
        ...state,
        cats: [...state.cats],
        loading: false,
      }

    case "HEAL_CAT":
      catIndex = state.cats.findIndex((cat) => {
        return cat.id === action.catId
      });

      state.cats[catIndex] = heal(state.cats[catIndex])

      return {
        ...state,
        cats: [...state.cats],
        loading: false,
      }

    case "PET_CAT":
      catIndex = state.cats.findIndex((cat) => {
        return cat.id === action.catId
      });

      state.cats[catIndex] = pet(state.cats[catIndex])

      return {
        ...state,
        cats: [...state.cats],
        loading: false,
      }

    default:
      return state;
  }
};

//*--------UTILITY-------------*//
function feed(cat) {
  cat.food += 5;
  cat.affection += 1;
  cat.hp += 1;

  if (cat.hp > 10) { cat.hp = 10 }
  if (cat.food > 10) { cat.food = 10 }
  if (cat.affection > 10) { cat.affection = 10 }

  return cat;
}

function heal(cat) {
  cat.hp += 5;
  cat.food += 1;
  cat.affection += 1;

  if (cat.hp > 10) { cat.hp = 10 }
  if (cat.food > 10) { cat.food = 10 }
  if (cat.affection > 10) { cat.affection = 10 }

  return cat;
}

function pet(cat) {
  cat.affection += 3;
  cat.hp += 1;

  if (cat.hp > 10) { cat.hp = 10 }
  if (cat.food > 10) { cat.food = 10 }
  if (cat.affection > 10) { cat.affection = 10 }

  return cat;
}