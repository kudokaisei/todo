class RemoveDetailsFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :detalis, :text
  end
end
