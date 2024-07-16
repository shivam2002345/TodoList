import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/index";

const store = configureStore({reducer:rootReducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//redux dev tool

export default store;