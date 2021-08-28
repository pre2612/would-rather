export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_QUESTION_ANSWER = 'SAVE_USER_QUESTION_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addUserQuestionAnswer(data) {
  return {
    type: SAVE_USER_QUESTION_ANSWER,
    authUser: data.authUser,
    id: data.id,
    answer: data.answer
  }
}


export function addUserQuestion (question) {
  return {
    type: SAVE_USER_QUESTION,
    question
  }
}
