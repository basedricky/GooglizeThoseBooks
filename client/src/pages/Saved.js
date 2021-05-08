import React, { Component } from 'react';
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import API from '../utils/API';
import SavedList from "../components/SavedList/index"

export default class Saved extends Component {
  state = {
    savedBooks: []
  }

  componentDidMount = () => {
    this.getBooks()
  }

  deleteGoogleBook = currentBook => {
    API.deleteBook(currentBook.id)
      .then(res => {
        console.log("You deleted this book: ", res);
        this.getBooks();
      })
      .catch(err => {
        console.log("Warning Error: ", err);
      })
  }

  getbooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({
          savedBooks: res.data
        })
        console.log("getBooks response: ", res);
      })
      .catch(err => {
        console.log("Warning Error: ", err);
      })
  }

  render() {
    return (

      <div>
        <Nav />
        <Container fluid>
          <Jumbotron />
          {this.state.savedBooks.length ? (
            <SavedList
              bookState={this.state.savedBooks}
              deleteGoogleBook={this.deleteGoogleBook}
            >
            </SavedList>
          ) : (
          
        )}
        </Container>
      </div>
    )
  }
}
