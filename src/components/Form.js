import React from 'react'
import {connect} from 'react-redux'
import {addingNewTask} from '../redux/actions'

class Form extends React.Component {
  state = {
    text: ''
  }

  onChange = (event) => {
    this.setState({text: event.target.value})
  }

  render(){
    return(
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text)
        event.target.reset()
      }}>
        <input type="text" onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (payload) => {dispatch(addingNewTask(payload))}
  }
}

export default connect(null, mapDispatchToProps)(Form)
