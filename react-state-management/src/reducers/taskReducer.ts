export interface Task {
  id: number
  text: string
}

export type TaskAction =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload }]
    case 'remove':
      return state.filter((task) => task.id !== action.payload)
    default:
      return state
  }
}