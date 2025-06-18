import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'

const saveTodosToStorage = (todos: TodoType[]) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos))
  } catch (error) {
    console.error('localStorage\'a kaydedilirken hata:', error)
  }
}

const loadTodosFromStorage = (): TodoType[] => {
  try {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
  } catch (error) {
    console.error('localStorage\'dan veri yüklenirken hata:', error)
    return []
  }
}

const initialState :TodoInitialState = {
      todos: loadTodosFromStorage()
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        createTodo: (state:TodoInitialState, action:PayloadAction<TodoType>) =>{
            state.todos = [...state.todos, action.payload]
            saveTodosToStorage(state.todos)
        },
        removeTodoById: (state:TodoInitialState,action:PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo:TodoType)=> todo.id!==action.payload)]
            saveTodosToStorage(state.todos)
        },
        updateTodo : (state:TodoInitialState, action:PayloadAction<TodoType>)=>{
            state.todos = [...state.todos.map((todo:TodoType)=> todo.id !== action.payload.id ? todo: action.payload)]
            saveTodosToStorage(state.todos)
        }

    }

})

export const { createTodo,removeTodoById,updateTodo} = todoSlice.actions
export default todoSlice.reducer