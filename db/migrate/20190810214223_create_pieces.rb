class CreatePieces < ActiveRecord::Migration[5.2]
  def change
    create_table :pieces do |t|
      t.string :name
      t.boolean :color
      t.integer :location
      t.boolean :state
      t.integer :game_id
      t.integer :piece_id
      t.timestamps
    end
  end
end
