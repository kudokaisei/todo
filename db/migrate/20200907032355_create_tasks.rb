class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :task
      t.string :weektask
      t.timestamps
    end
  end
end
