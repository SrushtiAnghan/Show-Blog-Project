import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducer/index'

export default configureStore({
  reducer: {
    data: blogReducer
  },
});

