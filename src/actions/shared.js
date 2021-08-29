import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getInitialData, saveQuestion, saveQuestionAnswer } from 'utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function addQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

function addQuestionAnswer(data) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser: data.authUser,
    id: data.id,
    answer: data.answer
  }
}


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData().then( ({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
    })
  }
}

export function handleSaveQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const  { authUser } = getState();
    saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authUser
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(hideLoading());
    })
  }
}

export function handleSaveQuestionAnswer(id, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    saveQuestionAnswer({
      authedUser: authUser,
      qid: id,
      answer: answer
    }).then(() => {
      dispatch(addQuestionAnswer({ authUser, id, answer }));
      dispatch(hideLoading());
    })
  }
}
