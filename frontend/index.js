class Utility {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.catsURL = `${baseURL}/cats`;
    this.accessoriesURL = `${baseURL}/accessories`;
    this.catContainer = document.getElementById("cat-container");
  }

  static constraint(cat) {
    cat.hp < 0 ? (cat.hp = 0) : (cat.hp = cat.hp);
    cat.hunger < 0 ? (cat.hunger = 0) : (cat.hunger = cat.hunger);
    cat.affection < 0 ? (cat.affection = 0) : (cat.affection = cat.affection);

    cat.hp > 10 ? (cat.hp = 10) : (cat.hp = cat.hp);
    cat.hunger > 10 ? (cat.hunger = 10) : (cat.hunger = cat.hunger);
    cat.affection > 10 ? (cat.affection = 10) : (cat.affection = cat.affection);
  }
}

class Cat {
  constructor(id, name, hp, hunger, affection, toughness) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.hunger = hunger;
    this.affection = affection;
    this._toughness = toughness;
  }

  feed(catElement) {
    this.hunger -= 5;
    this.affection += 1;
    Utility.constraint(this);
    catElement.getElementsByClassName("card-text")[0].innerHTML = this.fillOutCard();
  }

  heal(catElement) {
    this.hp += 3;
    this.hunger -= 1;
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

      <span><i class="fas fa-hamburger"></i>Hunger: ${this.hunger}/10</span>
      <div class="progress">
        <div class="progress-bar bg-warning foodProg" role="progressbar" style="width: ${this.hunger * 10}%"  aria-valuenow="${this.hunger}" aria-valuemin="0" aria-valuemax="10"></div>
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
          
          <button type="button" class="btn btn-primary feed">Feed</button>
          <button type="button" class="btn btn-primary pet">Pet</button>
          <button type="button" class="btn btn-primary heal">Heal</button>
        </div>
      </div>`

    return html;
  }

  static loadTodaysCats(cats) {
    let catsArr = cats.filter(cat => {
      return cat.affection >= Math.floor(Math.random() * 11)
    });
    return catsArr.map(cat => {
      return new Cat(cat.id, cat.name, cat.hp, cat.hunger, cat.affection, cat.toughness);
    });
  }
}

const utility = new Utility;
let todaysCats = [];

/* ---------------------------------------------LOAD DOM---------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/cats")
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
          cat.feed(catElement);
        });

        healBtn[0].addEventListener("click", (e) => {
          cat.heal(catElement);
        });

        petBtn[0].addEventListener("click", (e) => {
          cat.pet(catElement);
        });

        renameBtn[0].addEventListener("click", (e) => {
          cat.rename(catElement);
        });

        // Rename Event


      });
    });

});

