import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions ? action.questions : state
    case SAVE_QUESTION:
      return action.question ? action.question : state
    case SAVE_QUESTION_ANSWER:
      return state
    default:
        return state
  }
}
