class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.datetime :deleted_at
      t.boolean :host, null: false, default: false

      t.timestamps null: false
    end
  end
end
