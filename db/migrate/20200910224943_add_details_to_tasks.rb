class AddDetailsToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :detalis, :text
  end
end
