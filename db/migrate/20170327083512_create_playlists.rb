class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.integer :order
      t.string :video_id
      t.string :url
      t.string :title
      t.timestamps
    end
  end
end
