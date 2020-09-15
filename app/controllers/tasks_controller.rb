class TasksController < ApplicationController
  before_action :set_group

  def index
    @task = Task.new
    @tasks = Task.includes(:user)
  end

  def create
    @task = @group.tasks.new(task_params)
    if @task.save
      redirect_to group_tasks_path(@group), notice: 'メッセージが送信されました'
    else
      @tasks = @group.tasks.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
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

  def set_group
    @group = Group.find(params[:group_id])
  end

end
