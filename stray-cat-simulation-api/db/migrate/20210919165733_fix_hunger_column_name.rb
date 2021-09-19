class FixHungerColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :cats, :hunger, :food
  end
  
end
