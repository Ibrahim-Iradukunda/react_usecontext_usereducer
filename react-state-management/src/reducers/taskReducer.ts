export interface Task {
  id: number
  text: string
}

export type TaskAction =


export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'remove':
      return state.filter((task) => task.id !== action.payload)
    default:
      return state
  }
}