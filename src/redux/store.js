import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    reducer: rootReducer
  },
});

export default store;
