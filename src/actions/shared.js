import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions, saveUserQuestion, saveUserQuestionAnswer } from './questions'


export function handleInitialData() {
  return (dispatch) => {
    getInitialData().then( ({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    })
  }
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    saveQuestion(question).then((question) => {
      dispatch(saveUserQuestion(question));
    })
  }
}

export function handleSaveQuestionAnswer(data) {
  return (dispatch) => {
    saveQuestionAnswer(data).then(() => {
      dispatch(saveUserQuestionAnswer());
    })
  }
}
