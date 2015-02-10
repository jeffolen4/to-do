class ListsController < ActionController::Base
  layout 'application'

  def index
    @lists = List.all
    @list = List.first == nil ? nil : List.first
    # render('contacts/index.html.erb')
  end

  def create
    @list = List.create
    @list.name = params[:name]
    @list.save
    @lists = List.all
    render('lists/index.html.erb')
  end

  def destroy
    List.destroy(params[:id].to_i)
    @lists = List.all
    render('lists/index.html.erb')
  end

  def edit
    @list = List.find_by(id: params[:id].to_i )
    @tasks = Task.get_tasks_by_list_id( params[:id].to_i )
    render('tasks/index.html.erb')
  end


end
