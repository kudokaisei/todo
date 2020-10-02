class TasksController < ApplicationController
  before_action :set_group

  def index
    @tasks = @group.tasks.includes(:user)
  end

  def create
    @task = @group.tasks.new(task_params)
    if @task.save
      respond_to do |format|
        format.json
      end
    else
      render :index, alert: 'ToDoを入力してください'
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)
    redirect_to root_path
  end

  def task_params
    params.permit(:id, :task, :detalis).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end
