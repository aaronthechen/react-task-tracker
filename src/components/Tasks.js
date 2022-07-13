import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, currentFilter }) => {
  const predicate = (taskobj) => {
    switch (currentFilter) {
      case "none":
        //console.log(`CURRENT FILTER: ${currentFilter}. RETURNING TRUE FOR ${taskobj}`)
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
