import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Tabs, Tab, Card, Row, Col, Image } from 'react-bootstrap'
import { getAnsweredQuestions, getUnAnsweredQuestions } from '../../utils/helper'

class Polls extends Component {

  getQuestion = (user) => {
      const { questions } = this.props;
      const questionKey = user.questions[0];
      let question = '';

      Object.keys(questions).map((key, index) => {
              if(key === questionKey) {
                  question = questions[key].optionOne.text;
              }
          })
      return question;
  }

  render() {
    const { users, answeredQuestions, unAnsweredQuestions , questions } = this.props;
    return (
      <Card className="tabs-card">
          <Card.Body>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="home" title="Unanwered Questions" tabClassName="w-50 text-center">
                      <div className="leaderBoard-list">
                          {unAnsweredQuestions && unAnsweredQuestions.map((qa, index) =>
                            <Card className="poll-card" key={index}>
                                <Card.Header><strong>{users[questions[qa].author].name}</strong></Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col className="img-col">
                                          <Image className="img-avatar" src={users[questions[qa].author].avatarURL} />
                                        </Col>
                                        <Col>
                                            <h4>Would you rather</h4>
                                            <p>{questions[qa].optionOne.text}</p>
                                            <p>{questions[qa].optionTwo.text}</p>
                                            <Link to={"/vote/" + questions[qa].id}>
                                              <button className="btn btn-sm btn-success">View Poll</button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                          )}
                      </div>
                  </Tab>
                  <Tab eventKey="profile" title="Anwered Questions" tabClassName="w-50 text-center">
                      <div className="leaderBoard-list">
                      {answeredQuestions && answeredQuestions.map((qa, index) =>
                        <Card className="poll-card" key={index}>
                            <Card.Header><strong>{users[questions[qa].author].name}</strong></Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col className="img-col">
                                      <Image src={users[questions[qa].author].avatarURL} />
                                    </Col>
                                    <Col>
                                        <h4>Would you rather</h4>
                                        <p>{questions[qa].optionOne.text}</p>
                                        <p>{questions[qa].optionTwo.text}</p>
                                        <Link to={"/vote/" + questions[qa].id}>
                                          <button className="btn btn-sm btn-success">View Poll</button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                      )}
                      </div>
                  </Tab>
              </Tabs>
          </Card.Body>
      </Card>
    )
  }
}

export const mapStateToProps = ({ authUser, users, questions }) => ({
  users,
  questions,
  answeredQuestions: getAnsweredQuestions(questions, authUser),
  unAnsweredQuestions: getUnAnsweredQuestions(questions, authUser)
})

export default connect(mapStateToProps)(Polls);
