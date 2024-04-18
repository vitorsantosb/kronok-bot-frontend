const {combineReducers} = require('@reduxjs/toolkit');

import userReducer from './user/reducer.js';

const rootReducer = combineReducers({userReducer});

export default rootReducer;