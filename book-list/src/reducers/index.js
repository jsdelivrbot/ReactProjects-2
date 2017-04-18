import { combineReducers } from 'redux';

import BookListReducer from './reducer_book_list';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BookListReducer,
  selectedBook: ActiveBookReducer
});

export default rootReducer;
