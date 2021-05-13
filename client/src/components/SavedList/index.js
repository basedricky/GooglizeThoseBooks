import React, { Component } from 'react'
import SavedListItem from "../SavedListItem/index";

export default class index extends Component {

    render() {

        console.log("Props", this.props.bookState)

        return (
            this.props.bookState.map((book) => (
                <SavedListItem
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
                    image={book.image ? book.image : "https://cdn-5fcbf5c4c1ac1a221c18568d.closte.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png"}
                    description={book.description}
                    deleteGoogleBook={this.props.deleteGoogleBook}
                />
            ))
        )
    }
}
