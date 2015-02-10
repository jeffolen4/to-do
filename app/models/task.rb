class Task < ActiveRecord::Base
  validates :description, :presence => true

  def self.get_tasks_by_list_id (list_id)
    tasks = Task.where(list_id: list_id )
    # logger.debug "searching for tasks with #{list_id}. tasks is: #{tasks}"
    return tasks
  end

end
