import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap'
import { clearAuthUser } from 'actions/authUser'
import logo from 'assets/logo.png'
import './Navigation.style.css'

class Navigation extends Component {
  /**
  * User Log off & clearss authUser
  * @param    {e} event
  */
   logUserOut = (e) => {
     e.preventDefault();
     const { clearAuthUser } = this.props;
     clearAuthUser();
   }
    render() {
        const { authUser } = this.props;
        return (
          <Fragment>
            <Navbar variant="dark">
                <Container>
                    <NavLink to="/" className="nav-link"><Image src={logo} thumbnail width="60" height="60" /></NavLink>
                    {authUser && (
                      <>
                        <Nav className="me-auto">
                            <NavLink to="/add" className="nav-link">New Poll</NavLink>
                            <NavLink to="/leaderboard" className="nav-link">Leader Board</NavLink>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Hi, {authUser} &nbsp;
                            </Navbar.Text>
                            <Navbar.Text>
                                <Button variant="primary" onClick={this.logUserOut}>Logout</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                      </>
                    )}

                </Container>
            </Navbar>
            <LoadingBar />
          </Fragment>
        )
    }
}

export const mapStateToProps = ({ authUser }) => ({
  authUser
})

export const mapDispatchToProps = {
  clearAuthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
