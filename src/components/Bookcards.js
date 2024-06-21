import { Dropdown, DropdownButton } from "react-bootstrap"

export default function Bookcards({searchedBooks}) {
    return (
        searchedBooks.docs.map(
            item =>
                <div className="card text-white bg-dark">
                    <div className="card-header">
                        {
                            item.title?item.title:'Title Not Found'
                        }
                    </div>
                    <div className="card-body d-flex flex-wrap justify-content-around aling-items-center">
                        <div className="m-1">
                            {/* Cover Image */}

                            {
                                item.cover_edition_key ?
                                <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} alt="Book Cover Image"/>
                                :
                                <img style={{height: '35vh'}} src="https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg" alt="Image not available"/>
                            }
                        </div>
                        <div className="m-1">
                            <h4>Title:</h4>
                            <p>
                               {item.title?item.title:'Title Not Found'}
                            </p>

                            <h4>Author:</h4>
                            <p>
                               {item.author_name?
                               item.author_name.map(name => name + ', '):
                               'Author Not Found'}
                            </p>

                            {
                                item.id_amazon ?
                                    <DropdownButton id="dropdown-button" title="Buy on Amazon">
                                        {
                                            item.id_amazon.map(
                                                link => <Dropdown.Item href={`https://www.amazon.com/dp/${link}`} target="_blank">Link</Dropdown.Item>
                                            )
                                        }
                                    </DropdownButton>
                                : null
                            }

                            {
                                item.id_goodreads ?
                                    <DropdownButton className="mt-1" id="dropdown-button" title="Goodreads">
                                        {
                                            item.id_goodreads.map(
                                                link => <Dropdown.Item href={`https://www.goodreads.com/book/show/${link}`} target="_blank">Link</Dropdown.Item>
                                            )
                                        }
                                    </DropdownButton>
                                : null
                            }
                        </div>
                        <div className="m-1">
                            {/* ratings data and borrow books */}

                            <h4 className="card-title">Ratings:</h4>
                            <p className="card-text">{item.ratings_average ? item.ratings_average.toFixed(2):'-'}/5</p>

                            <h4 className="card-title">Ratings Count:</h4>
                            <p className="card-text">{item.ratings_count ? item.ratings_count.toFixed(2):'-'}</p>

                            {
                                item.ebook_access === 'borrowable' ?
                                <a className="btn btn-primary" href={`https://openlibrary.org${item.key}`} target="_blank">Borrow Book</a>
                                :
                                <a className="btn btn-primary disabled">Not Available</a>
                            }
                        </div>
                    </div>
                </div>
        )
    )
}