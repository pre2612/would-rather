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


export {
  getAnsweredQuestions,
  getUnAnsweredQuestions,
  getUser
}
