import { Component } from 'react'
import { connect } from 'react-redux'
import { sortedUserArray } from 'utils/helper'
import LeaderBoardCard from 'components/LeaderBoardCard/LeaderBoardCard.js'

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="leaderBoard-list">
        {users && users.map((user, index) =>
                <LeaderBoardCard key={index} user={user} />
        )}
      </div>
    )
  }
}

export const mapStateToProps = ({ users }) => ({
  users: sortedUserArray(users)
})

export default connect(mapStateToProps)(LeaderBoard);
