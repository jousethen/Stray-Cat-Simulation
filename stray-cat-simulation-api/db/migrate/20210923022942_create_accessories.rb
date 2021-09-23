class CreateAccessories < ActiveRecord::Migration[6.1]
  def change
    create_table :accessories do |t|
      t.belongs_to :cat
      t.integer :toughness, :default => 0
      t.integer :health, :default => 0
      t.integer :food, :default => 0
      t.integer :affection, :default => 0
      t.string :name
      t.string :is_discovered, :boolean,:default =>false
      t.timestamps
    end
  end
end
