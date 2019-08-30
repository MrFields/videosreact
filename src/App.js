import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'
import {updateCurrent} from './reducers/todo';
export class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Todo-App">
            <TodoForm/>
            <TodoList/>
          </div>
        </header>
      </div>
    );
  }
}

//export default connect(ma pStateToProps, mapDispatchToProps)(App)
//export default App
export default App