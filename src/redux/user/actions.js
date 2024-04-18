import userActionsTypes from '@/redux/user/actionType.js';
import userActionTypes from '@/redux/user/actionType.js';

export const loginUser = (payload) =>({
  type: userActionTypes.LOGIN_USER,
  payload: payload
})

export const logoutUser = () =>({
  type: userActionTypes.LOGOUT_USER,
})

export const updateUser = (payload) =>({
  type: userActionTypes.UPDATE_USER,
  payload: payload
})

export const newUser = () =>({
  type: userActionTypes.NEW_USER,
})