class AddStatePosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :state, :integer, null: false, default: 0
    add_index :posts, :state, using: :btree
  end
end
