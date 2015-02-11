class TasksController < ActionController::Base
  layout 'application'

  def index
    @list_id = params[:list_id].to_i
    @list = List.find_by(id: @list_id )
    @tasks = Task.get_tasks_by_list_id( @list_id )
    @task = Task.order("id").first == nil ? nil : Task.order("id").first
  end

  def create
    # logger.debug "attempting to create a task with list id: #{params[:task][:list_id]}. params is: #{params}"
    task_params = params[:task]
    @task = Task.create
    @task.list_id = task_params[:list_id]
    @task.description = task_params[:description]
    @task.due_date = task_params[:due_date]
    @task.done = false
    @task.save
    @tasks = Task.get_tasks_by_list_id( @task.list_id )
    @list = List.find_by(id: @task.list_id )
    @list_id = @task.list_id
    # logger.debug "retrieving list with list id: #{@list_id}. List is: #{@list}"
    render('tasks/index.html.erb')
  end

  def update
    # logger.debug "attempting to update a task with id: #{params[:id]}. params is: #{params}"
    @task = Task.find_by(id: params[:id].to_i)
    @task.done = !@task.done
    @task.save
    @tasks = Task.get_tasks_by_list_id( @task.list_id )
    @list = List.find_by(id: @task.list_id )
    @list_id = @task.list_id
    render('tasks/index.html.erb')
  end

  def destroy
    logger.debug "attempting to delete a task with id: #{params[:id]}. params is: #{params}"
    @task = Task.find_by(id: params[:id].to_i)
    @list_id = @task.list_id
    @list = List.find_by(id: @list_id )
    Task.destroy(params[:id].to_i)
    @tasks = Task.get_tasks_by_list_id( @list_id )
    @task = Task.order("id").first == nil ? nil : Task.order("id").first
    render('/tasks/index.html.erb')
  end

end
