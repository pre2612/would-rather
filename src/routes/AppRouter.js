import { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ProtectedRoute from 'routes/ProtectedRoute'
import Navigation from 'components/Navigation'
import Login from 'routes/Login/Login'
import LeaderBoard from 'routes/LeaderBoard/LeaderBoard'
import NewPoll from 'routes/NewPoll/NewPoll'
import Polls from 'routes/Polls/Polls'
import Vote from 'routes/Vote/Vote'
import VoteResults from 'routes/VoteResults/VoteResults'
import NotFound from 'routes/NotFound/NotFound'
import { Container, Row, Col } from 'react-bootstrap'

class AppRouter extends Component {
  render() {
    const { authUser } = this.props;
    return (
        <Router>
          {authUser && (
            <Navigation />
          )}
          <Container>
            <Row>
              <Col md={8} sm={10} xs={12} className="centered-col mt-4">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/add" component={NewPoll} authUser={authUser} />
                  <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} authUser={authUser} />
                  <ProtectedRoute exact path="/" component={Polls} authUser={authUser} />
                  <ProtectedRoute exact path="/vote/:id" component={Vote} authUser={authUser} />
                  <ProtectedRoute exact path="/vote/:id/results" component={VoteResults} authUser={authUser} />
                  <Route component={NotFound} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
    )
  }
}

export default AppRouter;
