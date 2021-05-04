import { createStore } from 'redux';
import ToDosReducer from './ToDosReducer';

const store = createStore(ToDosReducer);

export default store;