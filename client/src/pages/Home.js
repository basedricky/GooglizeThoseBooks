import React, { Component } from "react";
import { Container } from "../components/Grid/index";
import Nav from "../components/Nav/index";
import Jumbotron from "../components/Jumbotron/index";
import { Input, SubmitBtn } from "../components/Search/index";
import API from "../utils/API";
import ResultList from "../components/ResultList/index";

export default function Home() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // function to search for books

    function searchBooks() {
        API.googleBooks()
            .then(res =>
                setSearch(res.data.items),
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    }

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("this is the book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
            .then(res => console.log("Posted to the DB:", res))
            .catch(err => console.log("Warning Error:", err));

    }

    return (

        <div>
            <Nav />
            <Container fluid>
                <Jumbotron />
                <form>
                    <h5>Search for books</h5>
                    <Input
                        value={search}
                        onChange={handleInputChange}
                        name="search"
                        placeholder="e.g. Animorphs"
                    />
                    <SubmitBtn onClick={handleFormSubmit} />
                </form>
                {this.state.books.length ? (
                    <ResultList
                        bookState={this.state.books}
                        saveGoogleBook={this.saveGoogleBook}>
                    </ResultList>
                ) : (
                    <div>
                        <hr />
                        <p style={{ fontStyle: "italic" }}>No results to display</p>
                    </div>

                )}
            </Container>
        </div>
    )
}