class TasksController < ApplicationController
  def index
    @tasks = Task.includes(:user)
  end

  def create
    Task.create(task_params)
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    redirect_to root_path
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
    params.permit(:task, :detalis).merge(user_id: current_user.id)
  end

end
