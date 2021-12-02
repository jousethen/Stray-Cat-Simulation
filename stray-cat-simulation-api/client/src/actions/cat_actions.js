export const fetchAllCats = () => {
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
      let cats = {
        cat: "cat"
      }
      return cats
    });
}
