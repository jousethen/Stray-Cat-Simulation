class Utility {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.catsURL = `${baseURL}/cats`;
    this.userURL = `${baseURL}/user`;
    this.accessoriesURL = `${baseURL}/accessories`;
    this.catContainer = document.getElementById("cat-container");
    this.footer = document.querySelector('footer');
    this.nextDayBtn = document.getElementById("next-day");
    this.giftBtn = document.getElementById("gift");
    this.nextDayText = document.getElementById("next-day-img");
    this.userActionsElement = document.getElementById("actions");
    this.modalBody = document.getElementById("modal-body");
    this.modalFooter = document.getElementById("modal-footer");
    this.actionsAvailable = 0;
    this.accessories = [];
  }

  rollForAccessory() {
    return this.accessories[Math.floor(Math.random() * 5)]
  }
  displayAccessory(acc) {
    this.modalBody.innerHTML = `<h4>${acc.name} Found!</h4>
    <ul>
    ${acc.attributes}
    </ul>`;
  }
  newDay() {
    const catConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        actions: this.actionsAvailable
      })
    };

    const userConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        actions: this.actionsAvailable
      })
    };


    $("#next-day-img").fadeIn(3000, function () {

      setTimeout(() => { fetch(`${utility.catsURL}/overnight-adventures`, catConfig), 5000 });

      setTimeout(() => {
        fetch(`${utility.userURL}`, userConfig);
        location.reload();
      }, 5000)

    });
  }

  useAction() {
    this.actionsAvailable -= 1;
    this.userActionsElement.innerText = `Actions: ${utility.actionsAvailable}`;
  }

  static constraint(cat) {
    cat.hp < 0 ? (cat.hp = 0) : (cat.hp = cat.hp);
    cat.food < 0 ? (cat.food = 0) : (cat.food = cat.food);
    cat.affection < 0 ? (cat.affection = 0) : (cat.affection = cat.affection);

    cat.hp > 10 ? (cat.hp = 10) : (cat.hp = cat.hp);
    cat.food > 10 ? (cat.food = 10) : (cat.food = cat.food);
    cat.affection > 10 ? (cat.affection = 10) : (cat.affection = cat.affection);
  }
}

class Cat {
  constructor(id, name, hp, food, affection, toughness) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.food = food;
    this.affection = affection;
    this._toughness = toughness;
  }

  feed(catElement) {
    this.food += 5;
    this.affection += 1;
    this.hp += 1;
    Utility.constraint(this);
    catElement.getElementsByClassName("card-text")[0].innerHTML = this.fillOutCard();
  }

  heal(catElement) {
    this.hp += 3;
    this.food += 1;
    this.affection += 1;
    Utility.constraint(this);
    catElement.getElementsByClassName("card-text")[0].innerHTML = this.fillOutCard();
  }

  pet(catElement) {
    this.affection += 3;
    this.hp += 1;
    Utility.constraint(this);
    catElement.getElementsByClassName("card-text")[0].innerHTML = this.fillOutCard();
  }

  rename(catElement) {
    let newName = prompt("Name Your Friend:", "");
    this.name = newName;
    catElement.getElementsByClassName("card-title")[0].innerHTML = `${this.name}`
  }

  fillOutCard() {
    let html =
      `<span><i class="fas fa-briefcase-medical"></i>Health: ${this.hp}/10</span>
      <div class="progress">
        <div class="progress-bar hpProg" role="progressbar"  style="width: ${this.hp * 10}%" aria-valuenow="${this.hp}" aria-valuemin="0" aria-valuemax="10"></div>
      </div>

      <span><i class="fas fa-hamburger"></i>Food: ${this.food}/10</span>
      <div class="progress">
        <div class="progress-bar bg-warning foodProg" role="progressbar" style="width: ${this.food * 10}%"  aria-valuenow="${this.food}" aria-valuemin="0" aria-valuemax="10"></div>
      </div>

      <span><i class="fas fa-heart"></i>Affection: ${this.affection}/10</span>
      <div class="progress">
        <div class="progress-bar bg-danger affectionProg" role="progressbar" style="width: ${this.affection * 10}%" aria-valuenow="${this.affection}" aria-valuemin="0" aria-valuemax="10"></div>
      </div>`
    return html;
  }

  generateCard() {
    let html =
      `<div class="card">
        <img src="https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Wildlife_Sheriff_Cat_Icon.png/revision/latest?cb=20210316084923" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name} <button class="btn btn-secondary btn-sm rename"><i class="fas fa-pen-square"></i></button></h5>
          <p class="card-text">
          </p> 
          
          <button type="button" class="btn btn-primary btn-sm feed">Feed</button>
          <button type="button" class="btn btn-primary btn-sm  pet">Pet</button>
          <button type="button" class="btn btn-primary btn-sm heal">Heal</button>
        </div>
      </div>`

    return html;
  }

  static loadTodaysCats(cats) {
    let catsArr = cats.filter(cat => {
      return cat.affection >= Math.floor(Math.random() * 11)
    });
    return catsArr.map(cat => {
      return new Cat(cat.id, cat.name, cat.hp, cat.food, cat.affection, cat.toughness);
    });
  }
}

class Accessory {
  constructor(id, name, hp, food, affection, toughness) {
    this.id = id;
    this.name = name;
    this._hp = hp;
    this._food = food;
    this._affection = affection;
    this._toughness = toughness;
  }

  get attributes() {
    let listAttributes = "";
    if (this._hp > 0) {
      listAttributes += `<li>HP: +${this._hp}</li>`;
    }
    if (this._food > 0) {
      listAttributes += `<li>Food: +${this._food}</li>`;
    }
    if (this._affection > 0) {
      listAttributes += `<li>Affection: +${this._affection}</li>`;
    }
    if (this._toughness > 0) {
      listAttributes += `<li>Toughness: +${this._toughness}</li>`;
    }
    return listAttributes;
  }

  static loadAllAccessories(accessories) {
    let accArr = [];
    accessories.forEach(a => {
      if (a.cat_id == null)
        accArr.push(new Accessory(a.id, a.name, a.hp, a.food, a.affection, a.toughness));
    });

    return accArr;
  }
}
const utility = new Utility("http://localhost:3000");
let todaysCats = [];

/* ---------------------------------------------LOAD DOM---------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  //Get User
  fetch(utility.userURL)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      utility.actionsAvailable = parseInt(json.actions);
      utility.userActionsElement.innerText = `Actions: ${utility.actionsAvailable}`;
    });
  //Get Accessories
  fetch(utility.accessoriesURL)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      utility.accessories = Accessory.loadAllAccessories(json);
    });


  //Get Cats
  fetch(utility.catsURL)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      todaysCats = Cat.loadTodaysCats(json);

      todaysCats.forEach(cat => {
        let catElement = document.createElement("div");
        catElement.className = "col";
        catElement.style = "max - width: 240px;"
        catElement.id = `cat-${cat.id}`
        catElement.innerHTML = cat.generateCard();

        //Get Card-text seperately so that we can refresh without losing pointer to button
        let catCardText = catElement.getElementsByClassName("card-text");
        catCardText[0].innerHTML = cat.fillOutCard();

        const feedBtn = catElement.getElementsByClassName("feed");
        const petBtn = catElement.getElementsByClassName("pet");
        const healBtn = catElement.getElementsByClassName("heal");
        const renameBtn = catElement.getElementsByClassName("rename");
        utility.catContainer.appendChild(catElement);

        // Button Events
        feedBtn[0].addEventListener("click", (e) => {
          if (utility.actionsAvailable > 0) {
            cat.feed(catElement);
            utility.useAction();
          }

        });

        healBtn[0].addEventListener("click", (e) => {
          if (utility.actionsAvailable > 0) {
            cat.heal(catElement);
            utility.useAction();
          }
        });

        petBtn[0].addEventListener("click", (e) => {
          if (utility.actionsAvailable > 0) {
            cat.pet(catElement);
            utility.useAction();
          }
        });

        renameBtn[0].addEventListener("click", (e) => {
          if (utility.actionsAvailable > 0) {
            cat.rename(catElement);
            utility.useAction();
          }
        });

      });
    });

});
utility.giftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (utility.actionsAvailable != 0) {
    utility.useAction();
    let acc = utility.rollForAccessory();
    if (acc) {
      console.log(acc);
      utility.displayAccessory(acc);
    }
    else {
      utility.modalBody.innerHTML = `You look around for something to gift your new friends, but found nothing worth giving.`;
    }
  }


});

utility.nextDayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //Writeback data for all cats that showed up today
  todaysCats.forEach(cat => {
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

    fetch(`${utility.catsURL}/${cat.id}`, catConfig);


  });

  utility.newDay();
});