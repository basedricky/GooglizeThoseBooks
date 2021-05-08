import React, { Component } from 'react';
import ResultListItem from "../ResultListItem/ResultListItem"

export default class ResultList extends Component {
    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (

                <ResultListItem
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    link={book.volumeInfo.previewLink}
                    authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
                    images={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://cdn-5fcbf5c4c1ac1a221c18568d.closte.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png"}
                    description={book.volumeInfo.description}
                    saveGoogleBook={this.props.saveGoogleBook}
                />
            ))
        )
    }
}

export default ResultList