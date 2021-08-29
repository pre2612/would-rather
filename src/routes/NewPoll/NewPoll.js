import { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Card, Form, Button } from 'react-bootstrap'
import { handleSaveQuestion } from 'actions/shared'

class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    isDisabled: true
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      optionOne: this.optionOne.value,
      optionTwo: this.optionTwo.value,
      isDisabled: (this.state.optionOne !== '' && this.state.optionTwo !== '') ? false : true
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSaveQuestion, history } = this.props;
    const { optionOne, optionTwo } = this.state;
    handleSaveQuestion(optionOne, optionTwo);
    history.push('/');
  }
  render() {
    const { isDisabled } = this.state;
    return(
      <Fragment>
          <Card className="new-card">
              <Card.Header className="text-center"><strong>Create New Question</strong></Card.Header>
              <Card.Body>
                  <Form>
                      <p><strong>Would you rather--</strong></p>
                      <Form.Group className="mb-3" controlId="firstOption">
                          <Form.Control type="text" placeholder="Enter option one text here" onChange={this.handleChange} ref={(optionOne) => this.optionOne = optionOne} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="secondOption">
                          <Form.Control type="text" placeholder="Enter option two text here" onChange={this.handleChange} ref={(optionTwo) => this.optionTwo = optionTwo} />
                      </Form.Group>
                      <p className="text-center">
                        <Button type="submit" disabled={isDisabled} className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</Button>
                      </p>
                  </Form>
              </Card.Body>
          </Card>
      </Fragment>
    )
  }
}

export const mapDispatchToProps = {
  handleSaveQuestion
}

export default connect(null, mapDispatchToProps)(NewPoll);
