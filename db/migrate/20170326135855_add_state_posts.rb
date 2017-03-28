class AddStatePosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :state, :string, null: false, default: 'pub'
    add_index :posts, :state, using: :btree
  end
end
