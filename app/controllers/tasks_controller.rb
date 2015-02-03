class TasksController < ActionController::Base
  layout 'application'

  def index
    @tasks = Task.all
    @task = Task.order("id").first == nil ? Task.create : Task.order("id").first
    # render('contacts/index.html.erb')
  end

  def create
    @task = Task.create
    @task.description = params[:description]
    @task.done = false
    if @task.save
      @tasks = Task.all
    end
    render('tasks/index.html.erb')
  end

  def edit

  end


end
