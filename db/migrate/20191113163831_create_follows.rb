class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null:false
      t.integer :followed_user_id, null:false

      t.timestamps
    end
    add_index :follows, :user_id
    add_index :follows, :followed_user_id
  end
end
