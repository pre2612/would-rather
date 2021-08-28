import { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Progress.css'

class Progress extends Component {
  render() {
    const { voteInfo } = this.props;
    return (
      <div className={`progress-container ${voteInfo.optionSelected ? "chosen-answer" : ""}`}>
        {voteInfo.text}
        <ProgressBar variant="success" now={voteInfo.percent} />
        <span>{voteInfo.votes} out of {voteInfo.total} votes. ({voteInfo.percent}%)</span>
      </div>
    )
  }
}

export default Progress;
