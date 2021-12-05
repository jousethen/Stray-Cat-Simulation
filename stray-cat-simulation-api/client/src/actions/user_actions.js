export const fetchActionsAvailable = () => {
  return (dispatch) => {
    dispatch({ type: "GETTING_ACTIONS" });
    fetch('/api/user', {
      method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json)
        dispatch({ type: "GET_ACTIONS_SUCCESS", actions: json.actions })
      });
  };
}