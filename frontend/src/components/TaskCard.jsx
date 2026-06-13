function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task?.title || 'Task Title'}</h3>
      <p>{task?.description || 'Task description will appear here.'}</p>
      <span className="task-deadline">{task?.deadline || 'No deadline'}</span>
      <span className="task-priority">{task?.priority || 'medium'}</span>
    </div>
  )
}

export default TaskCard
