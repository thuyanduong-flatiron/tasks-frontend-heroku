import React, { Component } from 'react';
import Form from '../components/Form'
import TaskList from './TaskList'
import {connect} from 'react-redux'
import {fetchingTasks} from '../redux/actions'

class App extends Component {

  componentDidMount(){
    this.props.fetchingTasks()
  }

  render() {
    return (
      <div className="App">
        <Form/>
        <TaskList/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingTasks: () => {dispatch(fetchingTasks())}
  }
}

export default connect(null, mapDispatchToProps)(App);
