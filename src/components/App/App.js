import { Component, Fragment } from 'react'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../../actions/shared'
import Navigation from 'components/Navigation'
import Login from 'routes/Login/Login'
import LeaderBoard from 'routes/LeaderBoard/LeaderBoard'
import NewPoll from 'routes/NewPoll/NewPoll'
import Polls from 'routes/Polls/Polls'
import Vote from 'routes/Vote/Vote'
import NotFound from 'routes/NotFound/NotFound'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';

class App extends Component {
  componentDidMount() {
    const { handleInitialData } = this.props;
    handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Container>
            <Row>
              <Col md={8} sm={10} xs={12} className="centered-col">
                    {authUser && (
                      <>
                      <Route exact path="/add" component={NewPoll} />
                      <Route exact path="/leaderboard" component={LeaderBoard} />
                      <Route exact path="/" component={Polls} />
                      <Route exact path="/vote/:id" component={Vote} />
                      </>
                    )}
                    {!authUser && (
                      <>
                        <Route exact path="/" component={Login} />
                        <Redirect to="/" />
                      </>
                    )}
                    <Redirect to="/not-found" />
                    <Route exact path="/not-found" component={NotFound} />
              </Col>
            </Row>
          </Container>
        </Fragment>
      </Router>
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
