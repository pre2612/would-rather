export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveUserQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function saveUserQuestionAnswer() {
  return {
    type: SAVE_QUESTION_ANSWER
  }
}
