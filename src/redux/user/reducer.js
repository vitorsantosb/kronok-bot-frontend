import {user} from '@/models/models';
import {clearLocalStorageUser, persistLocalStorageUser} from '@/utils/utils.js';
import userActionTypes from './actionType.js';

export const userKey = 'user';

const storageUserData = JSON.parse(localStorage.getItem(userKey)) ?? null;

const initialState = {
  currentUser: storageUserData || null,
  newUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN_USER:
      persistLocalStorageUser(userKey, action.payload);
      return { ...state, currentUser: action.payload };

    case userActionTypes.LOGOUT_USER:
      clearLocalStorageUser(userKey);
      return { ...state, currentUser: null };

    case userActionTypes.UPDATE_USER:
      persistLocalStorageUser(userKey, action.payload);
      return { ...state, currentUser: action.payload };

    case userActionTypes.NEW_USER:
      return { ...state, newUser: newUser };

    default:
      return state;
  }
};

export default userReducer;
