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
  // my code is a mix of class components and functional components. just a bit unclear on certain things. i imagine this may be causing my issues with my saved page.
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
            <h5>No Results Found!</h5>
          )}
        </Container>
      </div>
    )
  }
}
