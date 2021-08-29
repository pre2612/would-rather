import { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from 'actions/shared'
import { getVoteInfo } from 'utils/helper'
import Progress from 'components/Progress'
import { Card, Row, Col, Image, Form } from 'react-bootstrap'

class Vote extends Component {
  state = {
    radioValue: '',
    isDisabled: true
  }
  componentDidMount() {
    const { question, history } = this.props;
    if(question === undefined) {
      history.push('/not-found');
    }
  }
  handleChange = (e) => {
    this.setState({
        radioValue: e.target.value,
        isDisabled: false
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSaveQuestionAnswer, id } = this.props;
    const { radioValue } = this.state;
    handleSaveQuestionAnswer(id, radioValue);
  }
  render() {
    const { users, question, answered, voteInfo } = this.props;
    const { radioValue, isDisabled } = this.state;
    if(!question) {
         return null;
     }
    return (
      <Card className="poll-card">
          <Card.Header><strong>{users[question.author].name}</strong></Card.Header>
          <Card.Body>
              <Row>
                  <Col className="img-col">
                    <Image className="img-avatar" src={users[question.author].avatarURL} />
                  </Col>
                    {!answered ? (
                        <Col>
                          <h4>Would you rather</h4>
                          <Form>
                               <Form.Group className="mb-3" controlId="firstOption">
                                   <Form.Check type="radio" value="optionOne" label={question.optionOne.text} checked={radioValue === "optionOne"} onChange={this.handleChange} />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="secondOption">
                                   <Form.Check type="radio" value="optionTwo" label={question.optionTwo.text} checked={radioValue === "optionTwo"} onChange={this.handleChange} />
                               </Form.Group>

                               <button disabled={isDisabled} type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Vote</button>
                           </Form>
                        </Col>
                    ) : (
                          <Col>
                              <h4>Results</h4>
                              <Progress voteInfo={voteInfo.optionOne} />
                              <Progress voteInfo={voteInfo.optionTwo} />
                          </Col>
                    )}
              </Row>
          </Card.Body>
      </Card>
    )
  }
}

export const mapStateToProps = ({ authUser, users, questions }, { match }) => {
  const id = match.params.question_id;
  const question = questions[id];
  const answered = question ? (question.optionOne.votes.indexOf(authUser) > -1 || question.optionTwo.votes.indexOf(authUser) > -1) : false;
  return {
    users,
    id,
    question,
    answered,
    voteInfo: question ? getVoteInfo(question, authUser) : {}
  }
}

export const mapDispatchToProps = {
  handleSaveQuestionAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
