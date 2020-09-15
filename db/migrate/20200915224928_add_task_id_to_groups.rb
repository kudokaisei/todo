class AddTaskIdToGroups < ActiveRecord::Migration[6.0]
  def change
    add_column :groups, :task_id, :integer
  end
end
