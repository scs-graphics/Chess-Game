class AddGamesWonLost < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :games_won, :integer
    add_column :users, :games_lost, :integer
  end
end
