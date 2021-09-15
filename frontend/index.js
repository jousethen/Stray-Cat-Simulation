class Utility {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.catsURL = `${baseURL}/cats`;
    this.accessoriesURL = `${baseURL}/accessories`;
    this.catContainer = document.getElementById("cat-container");
  }
}

class Cat {
  constructor(id, name, hp, hunger, affection, toughness) {
    this.name = name;
    this.hp = hp;
    this.hunger = hunger;
    this.affection = affection;
    this.toughness = toughness;
  }

  feed(catElement) {
    this.hunger += 1;
    if (this.hunger < 0) { this.hunger = 0 };

    catElement.getElementsByClassName("card-text")[0].innerHTML = this.fillOutCard();
    console.log(this);
  }

  fillOutCard() {
    let html =
      `<div class="progress">
        <i class="fas fa-briefcase-medical"></i><div class="progress-bar w-${this.hp * 10} hpProg" role="progressbar"  aria-valuenow="${this.hp}" aria-valuemin="0" aria-valuemax="10">${this.hp * 10}%</div>
      </div>
      <div class="progress">
        <i class="fas fa-hamburger"></i><div class="progress-bar w-${this.hunger * 10} bg-warning foodProg" role="progressbar"  aria-valuenow="${this.hunger}" aria-valuemin="0" aria-valuemax="10">${this.hunger * 10}%</div>
      </div>
      <div class="progress">
        <i class="fas fa-heart"></i><div class="progress-bar w-${this.affection * 10} bg-danger affectionProg" role="progressbar"  aria-valuenow="${this.affection}" aria-valuemin="0" aria-valuemax="10">${this.affection * 10}%</div>
      </div>`
    return html;
  }
  generateCard() {
    let html =
      `<div class="card">
        <img src="https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Wildlife_Sheriff_Cat_Icon.png/revision/latest?cb=20210316084923" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
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

//On Load
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
        utility.catContainer.appendChild(catElement);



        feedBtn[0].addEventListener("click", (e) => {
          cat.feed(catElement);
        });



      });
    });

});

