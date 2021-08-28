import { getInitialData, saveQuestion, saveQuestionAnswer } from 'utils/api'
import { receiveUsers, addUserQuestion, addUserQuestionAnswer } from './users'
import { receiveQuestions, addQuestion, addQuestionAnswer } from './questions'


export function handleInitialData() {
  return (dispatch) => {
    getInitialData().then( ({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    })
  }
}

export function handleSaveQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const  { authUser } = getState();
    console.log(authUser);
    saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authUser
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(question));
    })
  }
}

export function handleSaveQuestionAnswer(id, answer) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    saveQuestionAnswer({
      authedUser: authUser,
      qid: id,
      answer: answer
    }).then(() => {
      dispatch(addQuestionAnswer({ authUser, id, answer }));
      dispatch(addUserQuestionAnswer({ authUser, id, answer }));
    })
  }
}
