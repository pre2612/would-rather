import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

class NotFound extends Component {
  render() {
    return (
      <Card className="not-found">
          <Card.Header className="text-center">404!!</Card.Header>
          <Card.Body className="text-center">
              <h2>Uh Oh...</h2>
              <p>
                  No Worries we got your back.<br/>
                  Let's go back...<br/><br/> <Link to="/" className="btn btn-link"><strong>HOME</strong></Link>
              </p>
          </Card.Body>
      </Card>
    )
  }
}

export default NotFound;
