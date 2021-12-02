export const fetchTodaysCats = () => {
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
        let cats = json.filter(cat => {
          return cat.affection >= Math.floor(Math.random() * 11)
        });

        dispatch({ type: "LOAD_CATS_SUCCESS", cats: cats })
      });
  };
}
