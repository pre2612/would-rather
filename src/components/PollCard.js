import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image } from 'react-bootstrap'

class PollCard extends Component {
  render() {
    const { name, avatarURL, question } = this.props;
    return (
      <Card className="poll-card">
          <Card.Header><strong>{name}</strong></Card.Header>
          <Card.Body>
              <Row>
                  <Col className="img-col">
                    <Image className="img-avatar" src={avatarURL} />
                  </Col>
                  <Col>
                      <h4>Would you rather</h4>
                      <p className="mb-2">{question.optionOne.text}</p>
                      <p>{question.optionTwo.text}</p>
                      <Link to={`/questions/${question.id}`}>
                        <button className="btn btn-sm btn-success">View Poll</button>
                      </Link>
                  </Col>
              </Row>
          </Card.Body>
      </Card>
    )
  }
}

export default PollCard;
