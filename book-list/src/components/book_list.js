import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

class BookList extends Component {

    renderBookList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title} -- {book.pages} pages
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <strong>List of Books:</strong>
                <ul>
                    {this.renderBookList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps, { selectBook: selectBook })(BookList);

