import { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../../actions/shared'
import { Card, Row, Col, Image, Form } from 'react-bootstrap'

class Vote extends Component {
  state = {
    radioValue: '',
    id: this.props.match.params.id
  }
  handleChange = (e) => {
    this.setState({
        radioValue: e.target.value
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSaveQuestionAnswer, history } = this.props;
    const { id, radioValue } = this.state;
    handleSaveQuestionAnswer(id, radioValue);
    history.push('/');
  }
  render() {
    const { id } = this.props.match.params;
    const { users, questions } = this.props;
    const { radioValue } = this.state;
    return (
      <Card className="poll-card">
          <Card.Header><strong>{users[questions[id].author].name}</strong></Card.Header>
          <Card.Body>
              <Row>
                  <Col className="img-col">
                    <Image className="img-avatar" src={users[questions[id].author].avatarURL} />
                  </Col>
                  <Col>
                      <h4>Would you rather</h4>
                      <Form>
                           <Form.Group className="mb-3" controlId="firstOption">
                               <Form.Check type="radio" value="optionOne" label={questions[id].optionOne.text} checked={radioValue === "optionOne"} onChange={this.handleChange} />
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="secondOption">
                               <Form.Check type="radio" value="optionTwo" label={questions[id].optionTwo.text} checked={radioValue === "optionTwo"} onChange={this.handleChange} />
                           </Form.Group>

                           <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                       </Form>
                  </Col>
              </Row>
          </Card.Body>
      </Card>
    )
  }
}

export const mapStateToProps = ({ users, questions }) => ({
  users,
  questions
})

export const mapDispatchToProps = dispatch => ({
  handleSaveQuestionAnswer: (id, answer) => dispatch(handleSaveQuestionAnswer(id, answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
