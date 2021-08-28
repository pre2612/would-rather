import { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab} from 'react-bootstrap'
import PollCard from 'components/PollCard'
import { getAnsweredQuestions, getUnAnsweredQuestions } from 'utils/helper'

class Polls extends Component {

  render() {
    const { users, answeredQuestions, unAnsweredQuestions , questions } = this.props;
    return (
      <Tabs defaultActiveKey="unanwered" className="mb-3">
          <Tab eventKey="unanwered" title="Unanwered Questions" tabClassName="w-50 text-center">
              <div className="leaderBoard-list">
                  {unAnsweredQuestions && unAnsweredQuestions.map((qa, index) =>
                    <PollCard key={index} name={users[questions[qa].author].name} question={questions[qa]} avatarURL={users[questions[qa].author].avatarURL} />
                  )}
              </div>
          </Tab>
          <Tab eventKey="answered" title="Answered Questions" tabClassName="w-50 text-center">
              <div className="leaderBoard-list">
              {answeredQuestions && answeredQuestions.map((qa, index) =>
                <PollCard showResults key={index} name={users[questions[qa].author].name} question={questions[qa]} avatarURL={users[questions[qa].author].avatarURL} />
              )}
              </div>
          </Tab>
      </Tabs>
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
