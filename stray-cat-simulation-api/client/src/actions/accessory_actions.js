export const fetchAccessories = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_ACCESSORIES" });
    fetch('/api/accessories', {
      method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_ACCESSORIES_SUCCESS", accessories: json })
      });
  };
}


//*---------------UTILITY------------------------*//
// function loadFreeAccessories(accessories) {
//   let accArr = accessories.filter(a => {
//     return a.id === null
//   });
//   return accArr;
// }

// function loadtakenAccessories(accessories) {
//   let accArr = accessories.filter(a => {
//     return a.id !== null
//   });
//   return accArr;
// }