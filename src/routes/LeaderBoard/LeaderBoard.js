import { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardCard from '../../components/LeaderBoardCard/LeaderBoardCard.js'

class LeaderBoard extends Component {
  render() {
    const { users } =this.props;
    return (
      <div className="leaderBoard-list">
        {users && Object.keys(users).map((key, index) =>
                <LeaderBoardCard key={index} user={users[key]} />
        )}
      </div>
    )
  }
}

export const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps)(LeaderBoard);
