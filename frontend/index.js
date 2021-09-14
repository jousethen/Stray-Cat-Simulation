class Utility {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.catsURL = `${baseURL}/cats`;
    this.accessoriesURL = `${baseURL}/accessories`;
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

  static loadTodaysCats(cats) {
    let catsArr = cats.filter(cat => {
      return cat.affection >= Math.floor(Math.random() * 11)
    });

    return catsArr.map(cat => {
      return new Cat(cat.name, cat.hp, cat.hunger, cat.affection, cat.toughness);
    })
  }
}

let todaysCats = [];
document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:3000/cats")
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      todaysCats = Cat.loadTodaysCats(json);
      console.log(todaysCats);
    });



});