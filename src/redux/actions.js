import {ADD_NEW_TASK, FETCHED_TASKS, DELETE_TASK, UPDATE_TASK} from './actionTypes'

const URL = 'https://anns-tasks-backend.herokuapp.com'

const fetchingTasks = () => {
  return (dispatch) => {
    fetch(`${URL}/tasks`)
    .then(res => res.json())
    .then(tasks => dispatch({type: FETCHED_TASKS, tasks}))
  }
}

const addingNewTask = (text) => {
  return (dispatch) => {
    fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type" :"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({text: text, done: false})
    })
    .then(res => res.json())
    .then(task => dispatch(addNewTask(task)))
  }
}
const addNewTask = (payload) => ({type: ADD_NEW_TASK, payload})

const deletingTask = (id) => {
  return (dispatch) => {
    fetch(`${URL}/tasks/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(() => dispatch(deleteTask(id)))
  }
}
const deleteTask = (id) => ({type: DELETE_TASK, id})

const updatingTask = (id, done) => {
  return (dispatch) => {
    fetch(`${URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" :"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({done: done})
    })
    .then(res => res.json())
    .then(task => dispatch(updateTask(task)))
  }
}
const updateTask = (task) => ({type: UPDATE_TASK, task})

export {fetchingTasks, addingNewTask, deletingTask, updatingTask}
