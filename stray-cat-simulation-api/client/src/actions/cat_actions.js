export const fetchAllCats = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_CATS" });
    fetch('/api/cats', {
      method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        dispatch({ type: "LOAD_CATS_SUCCESS", cats: json })
      });
  };
}
