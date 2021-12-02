export const fetchAllCats = () => {
  let user;

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
    });
}
