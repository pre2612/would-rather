import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Image } from 'react-bootstrap'
import { setAuthUser } from '../../actions/authUser'
import logo from 'assets/logo.png'
import './Login.css'

class Login extends Component {
  state = {
    selectedUser: {},
    isDisabled: true
  }
  /**
  * Submits User Login Form (sets Auth User)
  * @param    {e} event
  */
  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedUser } = this.state;
    const { setAuthUser, history } = this.props;
    setAuthUser(selectedUser);
    history.replace(history.location.state);

  }
  /**
  * changes selected User for Login & sets state
  * @param    {e} event
  */
  changeSelectedUser = (e) => {
    e.preventDefault();
    this.setState({ selectedUser: e.target.value, isDisabled: false })
  }

  render() {
    const { users } = this.props;
    const { selectedUser, isDisabled } = this.state;
    return (
      <Fragment>
          <Card className="login-card text-center">
              <Card.Header className="text-center">
                <Image src={logo} thumbnail width="60" height="60" className="" /><br />
                <strong>Sign In</strong>
              </Card.Header>
              <Card.Body>
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Group className="mb-3" controlId="firstOption">
                          <h5>Select user:</h5>
                          <select className="form-control" id="user" value={selectedUser} onChange={this.changeSelectedUser}>
                            <option value="">--Select user--</option>
                            {users && Object.keys(users).map((key, index) =>
                                  <option key={index} value={users[key].id}>{users[key].name}</option>
                            )}
                          </select>
                      </Form.Group>
                      <p className="text-center">
                          <button type="submit" disabled={isDisabled} className="btn btn-primary btn-block">Login</button>
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

const mapDispatchToProps = {
    setAuthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
