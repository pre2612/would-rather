export const SET_AUTH_USER = 'SET_AUTH_USER'
export const CLEAR_AUTH_USER = 'CLEAR_AUTH_USER'

export function setAuthUser(userId) {
  return {
    type: SET_AUTH_USER,
    userId: userId
  }
}

export function clearAuthUser(userId) {
  return {
    type: CLEAR_AUTH_USER
  }
}
