import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, currentFilter }) => {
  // Check if the current task passes the filter criteria 
  const predicate = (taskobj) => {
    switch (currentFilter) {
      case "none":
        return true
        break;
      case "reminders":
        return taskobj.reminder
        break;
    }
  }
 
  

  return (
    <>
    {
    tasks.filter(obj => predicate(obj)).map((task, index) => 
      (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      )
    )

    
    }
    </>
  )
}

export default Tasks
