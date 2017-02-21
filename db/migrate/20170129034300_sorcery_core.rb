class SorceryCore < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :password_digest
    remove_column :users, :deleted_at
    change_column :users, :email, :string, null: false
    add_column :users, :crypted_password, :string
    add_column :users, :salt, :string
    add_column :users, :admin, :boolean, null: false, default: false
    add_index :users, :email, unique: true
  end
end
