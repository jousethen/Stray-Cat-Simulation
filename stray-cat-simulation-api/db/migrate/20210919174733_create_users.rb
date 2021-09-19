class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :actions, :default => 5

      t.timestamps
    end
  end
end
