import { Component } from 'react'
import { connect } from 'react-redux'
import { getVoteInfo } from 'utils/helper'
import { Card, Row, Col, Image } from 'react-bootstrap'
import Progress from 'components/Progress'

class VoteResults extends Component {
  render() {
    const { id } = this.props.match.params;
    const { users, questions, authUser } = this.props;
    const voteInfo = getVoteInfo(questions[id], authUser);

    return(
      <Card className="poll-results-card">
          <Card.Header><strong>{users[questions[id].author].name}</strong></Card.Header>
          <Card.Body>
              <Row>
                  <Col className="img-col">
                    <Image className="img-avatar" src={users[questions[id].author].avatarURL} />
                  </Col>
                  <Col>
                      <h4>Results</h4>
                      <Progress voteInfo={voteInfo.optionOne} />
                      <Progress voteInfo={voteInfo.optionTwo} />
                  </Col>
              </Row>
          </Card.Body>
      </Card>
    )
  }
}

export const mapStateToProps = ({ authUser, users, questions }) => ({
  authUser,
  users,
  questions
})

export default connect(mapStateToProps)(VoteResults);
