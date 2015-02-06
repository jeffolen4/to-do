class ListsController < ActionController::Base
  layout 'application'

  def index
    @lists = List.all
    @list = List.first == nil ? List.create : List.first
    # render('contacts/index.html.erb')ß
  end

  def create
    @list = List.create
    @list.name = params[:name]
    if @list.save
      @lists = List.all
    end
    render('lists/index.html.erb')
  end

  def edit

  end


end
