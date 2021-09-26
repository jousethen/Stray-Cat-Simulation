# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Test Seeding
cats = Cat.create([{name: "Test Kitty 1", affection: 10}, {name: "Test Kitty 2", affection: 5 }])
accessories = Accessory.create([{name: "Catnip", affection: 2}, {name: "Mouse Toy", food: 1, toughness: 1}, {name: "Bullet-Proof Cat Vest", toughness: 5}, {name: "Crumbled Receipt", affection: 1}, {name: "Ham n Cheese", food:1}, {name: "scarf", toughness: 1}, {name: "Cat Brush", affection: 5}, {name: "Bandana", affection: 1, toughness: 1}])

accessories[2].cat_id = 1
accessories[2].save;
User.create()
