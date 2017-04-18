import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component {

    render() {
        if(!this.props.activeBook){
            return(
                <div>Select a book to start.</div>
            );
        }
        return (
            <div>
                <h3>Selected Book: </h3>
                <div>{this.props.activeBook.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.selectedBook
    };
}

export default connect(mapStateToProps)(ActiveBook);
