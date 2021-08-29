import { RECEIVE_USERS } from 'actions/users'
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from 'actions/shared'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users
    case SAVE_QUESTION:
    return {
      ...state,
      [action.question.author]: {
       ...state[action.question.author],
       questions: state[action.question.author].questions.concat([action.question.id])
     }
    }
    case SAVE_QUESTION_ANSWER:
    return {
      ...state,
      [action.authUser]: {
        ...state[action.authUser],
        answers: {
          ...state[action.authUser].answers,
          [action.id]: action.answer
        }
      }
    }
    default:
        return state
  }
}
