import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './styles.scss';
import { Container } from '@mui/material';
import ListeningService from '../../services/ListeningService';
import { serverAPI } from '../../lib/config';

function ReadingSection() {
    const [books, setBooks] = useState<any[]>([]);
    const history = useHistory();

    useEffect(() => {
        const bookService = new ListeningService();
        bookService.getAllBooks()
            .then((data) => {
                setBooks(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleBookClick = (id:string) => {
        console.log(id);
        
        history.push(`/reading/${id}`);
      }

    return (
        <div className="reading">
            <div className="top-heading">
                <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
                    <h2 className="heading">READING SECTION</h2>
                </Container>
            </div>
            <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
                {books && books.length > 0 ? (
                    <div className="box">
                        {books.map((book: any) => {
                            const url = `${serverAPI}/${book.bookImages[0]}`;
                            console.log(book);
                            
                            return (
                                <div
                                    className="card"
                                    key={book._id}
                                    onClick={() => handleBookClick(book._id)}
                                >
                                    <img className="img" src={url} alt={book.title} />
                                    <h2>{book.title}</h2>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>No books available</p>
                )}
            </Container>
        </div>
    );
}

export default ReadingSection;
