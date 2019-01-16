import {combineReducers} from 'redux'
import {ADD_NEW_TASK, FETCHED_TASKS, DELETE_TASK, UPDATE_TASK} from './actionTypes'

const taskReducer = (oldState = [], action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [...oldState, {
        id: action.payload.id,
        text: action.payload.text,
        done: false
      }]
    case FETCHED_TASKS:
      return action.tasks
    case UPDATE_TASK:
      return oldState.map(t => {
        if(t.id === action.task.id){
          return action.task
        }else{
          return t
        }
      })
    case DELETE_TASK:
      let i = oldState.findIndex(t => t.id === action.id)
      return [...oldState.slice(0, i), ...oldState.slice(i+1, oldState.length)]
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  tasks: taskReducer
})

export default rootReducer
