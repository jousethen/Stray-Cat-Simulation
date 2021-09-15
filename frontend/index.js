class Utility {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.catsURL = `${baseURL}/cats`;
    this.accessoriesURL = `${baseURL}/accessories`;
    this.catContainer = document.getElementById("cat-container");
  }
}

class Cat {
  constructor(name, hp, hunger, affection, toughness) {
    this.name = name;
    this.hp = hp;
    this.hunger = hunger;
    this.affection = affection;
    this.toughness = toughness;
  }

  cardInfo() {
    let html =
      `<div class="card">
        <img src="https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Wildlife_Sheriff_Cat_Icon.png/revision/latest?cb=20210316084923" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">
          ${this.hp}HP
          </p>
          <a href="#" class="btn btn-primary">Feed</a>
        </div>
      </div>`

    return html;
  }

  static loadTodaysCats(cats) {
    let catsArr = cats.filter(cat => {
      return cat.affection >= Math.floor(Math.random() * 11)
    });

    return catsArr.map(cat => {
      return new Cat(cat.name, cat.hp, cat.hunger, cat.affection, cat.toughness);
    });
  }

}

const utility = new Utility;
let todaysCats = [];
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
        catElement.innerHTML = cat.cardInfo();

        utility.catContainer.appendChild(catElement);
      });

    });




});

