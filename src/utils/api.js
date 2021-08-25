import {
  _getUsers,
  _saveQuestion,
  _getQuestions,
  _saveQuestionAnswer
} from './_DATA.js';


export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users: users,
      questions: questions
    })
  );
}

export function getUsers() {
  return _getUsers();
}

export function saveQuestion(data) {
  return _saveQuestion(data);
}

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data);
}

export function getQuestions() {
  return _getQuestions();
}
