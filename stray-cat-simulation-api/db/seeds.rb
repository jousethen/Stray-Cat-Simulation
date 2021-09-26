# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Test Seeding
cats = Cat.create([{name: "Brown Stray", affection: 10, toughness: 3, image:"cat1_brown.png"}, {name: "Cream Stray", affection: 1, toughness:2, image:"cat1_cream.png" }, {name: "Gray Stray", affection: 1, toughness:6, image:"cat1_grey.png" }, {name: "Black Stray", affection: 1, toughness:4, image:"cat2_black.png" }, {name: "Orange Stray", affection: 1, toughness:3, image:"cat2_orange.png" }, {name: "White Stray", affection: 1, toughness:7, image:"cat2_white.png" }, {name: "Gold Stray", affection: 1, toughness:2, image:"cat3_gold.png" }, {name: "Midnight Stray", affection: 1, toughness:7, image:"cat3_midnight.png" }, {name: "Rust Stray", affection: 1, toughness:4, image:"cat3_rust.png" }])

accessories = Accessory.create([{name: "Catnip", affection: 2}, {name: "Mouse Toy", food: 1, toughness: 1}, {name: "Bullet-Proof Cat Vest", toughness: 5}, {name: "Crumbled Receipt", affection: 1}, {name: "Ham n Cheese", food:1}, {name: "scarf", toughness: 1}, {name: "Cat Brush", affection: 5}, {name: "Bandana", affection: 1, toughness: 1}])
User.create()
