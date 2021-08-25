import { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../../actions/shared'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Starter code
          </p>
        </header>
      </div>
    )
  }
}

export const mapStateToProps = ({ authUser }) => ({
  authUser
})

export default connect(mapStateToProps)(App);
