import axios from "axios";

export default {

  // Gets books from the Google API
  googleBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all saved books
  getBooks: function () {
    return axios.get("/api/books");
  },

  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },

  // Deletes the saved book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }


};