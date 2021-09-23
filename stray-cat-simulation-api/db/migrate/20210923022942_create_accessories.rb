class CreateAccessories < ActiveRecord::Migration[6.1]
  def change
    create_table :accessories do |t|
      t.integer :toughness
      t.integer :health
      t.integer :food
      t.integer :affection
      t.string :name

      t.timestamps
    end
  end
end
