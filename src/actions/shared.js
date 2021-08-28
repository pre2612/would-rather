import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getInitialData, saveQuestion, saveQuestionAnswer } from 'utils/api'
import { receiveUsers, addUserQuestion, addUserQuestionAnswer } from './users'
import { receiveQuestions, addQuestion, addQuestionAnswer } from './questions'


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
      dispatch(addUserQuestion(question));
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
      dispatch(addUserQuestionAnswer({ authUser, id, answer }));
      dispatch(hideLoading());
    })
  }
}
