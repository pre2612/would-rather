import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions ? action.questions : state
    case SAVE_QUESTION:
    return {
      ...state,
      [action.question.id]: action.question
    }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: !state[action.id][action.answer].votes.includes(action.authUser) ? state[action.id][action.answer].votes.concat([action.authUser]) : state[action.id][action.answer].votes
          }
        }
      }
    default:
        return state
  }
}
