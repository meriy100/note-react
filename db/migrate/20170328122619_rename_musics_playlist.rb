class RenameMusicsPlaylist < ActiveRecord::Migration[5.0]
  def change
    rename_table :playlists, :playlist_items
    add_column :playlist_items, :duration, :datetime
    add_column :playlist_items, :type, :string
  end
end
