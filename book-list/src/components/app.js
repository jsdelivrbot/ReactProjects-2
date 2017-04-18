import React, { Component } from 'react';

import BookList from './book_list';
import ActiveBook from './active_book';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <ActiveBook />
      </div>
    );
  }
}
