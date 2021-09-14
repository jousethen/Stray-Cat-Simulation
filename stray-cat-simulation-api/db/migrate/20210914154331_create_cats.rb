class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string :name, :default => "No Name"
      t.integer :hp, :default => 10
      t.integer :hunger, :default => 0
      t.integer :affection, :default => 1
      t.integer :toughness,  :default => 5
      t.string :image

      t.timestamps
    end
  end
end
