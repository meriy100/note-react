class AddStateToPlaylistItems < ActiveRecord::Migration[5.0]
  def change
    add_column :playlist_items, :state, :string, default: 'onplaylist'
    add_index :playlist_items, :state, using: :btree
  end
end
