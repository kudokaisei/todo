class RemoveWeekTaskFromTasks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tasks, :weektask, :string
  end
end
