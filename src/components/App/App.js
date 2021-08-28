import { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../../actions/shared'
import AppRouter from 'routes/AppRouter'

import './App.css';

class App extends Component {
  componentDidMount() {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <AppRouter authUser={authUser} />
    )
  }
}

export const mapStateToProps = ({ authUser }) => ({
  authUser
})

export const mapDispatchToProps = dispatch => ({
  handleInitialData: () => dispatch(handleInitialData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
