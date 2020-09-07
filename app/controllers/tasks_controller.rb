class TasksController < ApplicationController
  def index
    @task = Task.new
    @tasks = Task.all
  end

  def create
    Task.create(task: params[:task])
    redirect_to root_path
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
    task.update(task: params[:task])
    redirect_to root_path
  end

end
