import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deletingTask, updatingTask} from '../redux/actions'

class Task extends Component {

  render(){
    return(
      <div>
        <button onClick={() => {this.props.onDelete(this.props.task.id)}}>x</button>
        {this.props.task.text}
        <input type="checkbox"
        checked={this.props.task.done}
        onChange={(e) => {this.props.onChange(this.props.task.id, e.target.checked)}}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id) => {dispatch(deletingTask(id))},
    onChange: (id, done) => {dispatch(updatingTask(id, done))}
  }
}

export default connect(null, mapDispatchToProps)(Task)
