const getAnsweredQuestions = (questions, authUser) => {
  let answeredQuestions = Object.keys(questions).filter((qa) => {
      return questions[qa].optionOne.votes.includes(authUser) || questions[qa].optionTwo.votes.includes(authUser)
  }).sort( (a, b) => {
      return questions[b].timestamp - questions[a].timestamp
  })
  return answeredQuestions;
}

const getUnAnsweredQuestions = (questions, authUser) => {
  let unAnsweredQuestions = Object.keys(questions).filter((qa) => {
      return !questions[qa].optionOne.votes.includes(authUser) && !questions[qa].optionTwo.votes.includes(authUser)
  }).sort( (a, b) => {
      return questions[b].timestamp - questions[a].timestamp
  })
  return unAnsweredQuestions;
}

const getUser = (users, authUser) => {
  return users[authUser];
}

const sortedUserArray = (users) => {
  const userArray = Object.keys(users).map((key) => users[key]);

  const sortedUserArray = userArray.sort((a, b) => {
    const sumA = Object.keys(a.answers).length + a.questions.length;
    const sumB = Object.keys(b.answers).length + b.questions.length;
    return sumB -sumA;
  })
  return sortedUserArray;
}

const getVoteInfo = (question, authUser) => {
  let total = question.optionOne.votes.length + question.optionTwo.votes.length;
  return {
        optionOne: {
          percent: Math.round((question.optionOne.votes.length / total) * 100),
          votes: question.optionOne.votes.length,
          text: question.optionOne.text,
          total: total,
          optionSelected: question.optionOne.votes.includes(authUser) ? true : false
        },
        optionTwo: {
          percent: Math.round((question.optionTwo.votes.length / total) * 100),
          votes: question.optionTwo.votes.length,
          text: question.optionTwo.text,
          total: total,
          optionSelected: question.optionTwo.votes.includes(authUser) ? true : false
        }
    }
}


export {
  getAnsweredQuestions,
  getUnAnsweredQuestions,
  getUser,
  getVoteInfo,
  sortedUserArray
}
