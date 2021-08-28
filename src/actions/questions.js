export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function addQuestionAnswer(data) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser: data.authUser,
    id: data.id,
    answer: data.answer
  }
}
