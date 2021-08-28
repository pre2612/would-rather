import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Form } from 'react-bootstrap'
import { setAuthUser } from '../../actions/authUser'

class Login extends Component {
  state = {
    selectedUser: {}
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedUser } = this.state;
    const { setAuthUser } = this.props;
    setAuthUser(selectedUser);
  }
  changeSelectedValue = (e) => {
    e.preventDefault();
    this.setState({ selectedUser: e.target.value })
  }
  render() {
    const { users } = this.props;
    const { selectedUser } = this.state;
    return (
      <Fragment>
          <Card className="new-card">
              <Card.Header className="text-center"><strong>Sign In</strong></Card.Header>
              <Card.Body>
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Group className="mb-3" controlId="firstOption">
                          <p>Select user:</p>
                          <select className="form-control" id="user" value={selectedUser} onChange={this.changeSelectedValue}>
                            {users && Object.keys(users).map((key, index) =>
                                  <option key={index} value={users[key].id}>{users[key].name}</option>
                            )}
                          </select>
                      </Form.Group>
                      <p className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">Login</button>
                      </p>
                  </Form>
              </Card.Body>
          </Card>
      </Fragment>
    )
  }
}

export const mapStateToProps = ({ users }) => ({
  users
})

export const mapDispatchToProps = dispatch => ({
  setAuthUser: userId => dispatch(setAuthUser(userId))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
