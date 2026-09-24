import { useReducer, useState, type FormEvent } from 'react'
import { useTheme } from '../context/useTheme'
import { taskReducer } from '../reducers/taskReducer'

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [taskText, setTaskText] = useState('')
  const { theme } = useTheme()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedTask = taskText.trim()

    if (!trimmedTask) return

    dispatch({ type: 'add', payload: trimmedTask })
    setTaskText('')
  }

  return (
    <section className={`task-card ${theme}`} aria-labelledby="task-title">
      <div className="card-heading">
        <div>
          <p className="section-label">useReducer</p>
          <h2 id="task-title">Task manager</h2>
        </div>
        <span className="task-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="new-task">What needs doing?</label>
        <div className="input-row">
          <input
            id="new-task"
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Add a task to your list"
          />
          <button type="submit" disabled={!taskText.trim()}>Add task</button>
        </div>
      </form>

      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button
                className="remove-task"
                type="button"
                aria-label={`Remove ${task.text}`}
                onClick={() => dispatch({ type: 'remove', payload: task.id })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Your task list is clear. Add something small to begin.</p>
      )}
    </section>
  )
}

export default TaskManager