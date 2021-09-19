# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Test Seeding
cats = Cat.create([{name: "Test Kitty 1", affection: 10}, {name: "Test Kitty 2", affection: 5 }])
User.create()
