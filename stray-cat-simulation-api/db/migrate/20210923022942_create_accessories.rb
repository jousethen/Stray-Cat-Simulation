class CreateAccessories < ActiveRecord::Migration[6.1]
  def change
    create_table :accessories do |t|
      t.belongs_to :cat
      t.integer :toughness
      t.integer :health
      t.integer :food
      t.integer :affection
      t.string :name
      t.string :is_discovered, :boolean,:default =>false
      t.timestamps
    end
  end
end
