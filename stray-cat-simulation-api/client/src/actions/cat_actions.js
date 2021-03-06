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
        let cats = json.filter(cat => {
          return cat.affection >= Math.floor(Math.random() * 11)
        });

        dispatch({ type: "LOAD_CATS_SUCCESS", cats: cats })
      });
  };
}

export const proceedToNextDay = (cats, actionsAvailable, accessories) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_NEXT_DAY" });
    //Iterate Through Each Updated Cat and Update
    cats.forEach(cat => {
      const catData = {
        id: cat.id,
        name: cat.name,
        hp: cat.hp,
        food: cat.food,
        affection: cat.affection
      };

      const catConfig = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(catData)
      };

      fetch(`/api/cats/${cat.id}`, catConfig);
    });

    const catConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        actions: actionsAvailable
      })
    };

    const userConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        actions: actionsAvailable
      })
    };

    //Kick off Behind the Scene Randomized Actions
    fetch(`/api/cats/overnight-adventures`, catConfig);

    //Save Unused Actions
    fetch(`/api/user`, userConfig).then(() => {
      dispatch({ type: "WAIT_TO_CONTINUE" });
    });

    //Save Accessory Ownerships
    accessories.forEach((acc) => {
      const accessoryData = {
        id: acc.id,
        cat_id: acc.cat_id
      };

      const accessoryConfig = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(accessoryData)
      };

      fetch(`/api/accessories/${acc.id}`, accessoryConfig);

    })



  };
}



