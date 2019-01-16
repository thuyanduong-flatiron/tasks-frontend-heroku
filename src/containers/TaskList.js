import React from 'react'
import Task from '../components/Task'
import {connect} from 'react-redux'

const TaskList = (props) => {
  return(
    props.tasks !== null ? props.tasks.map(task => <Task
      key={task.id}
      task={task}
      onDelete={props.onDelete}
      />) : null
  )
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskList)
