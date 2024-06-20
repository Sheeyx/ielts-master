import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ListeningService from '../../../../services/ListeningService';
import { Container, Grid } from '@mui/material';
import PracticeCard from './components/PracticeCard';

function ReadingDetail() {
    const { id } = useParams<any>();
    const [book, setBook] = useState<any>();
    
    useEffect(() => {
        const book = new ListeningService;
        book.getReadingBooksByBookId(id)
        .then((data)=>setBook(data));
    }, []);

    console.log(book);

    return (
        <Container>
            {
                book ? 
                <Grid container spacing={2}>
                {book?.map((practice:any) => (
                    <Grid item key={practice._id} xs={12} sm={6} md={4}>
                        <PracticeCard 
                            practice={practice} 
                            />
                    </Grid>
                ))}
            </Grid> : "No available"
            }
            
        </Container>
    );
}

export default ReadingDetail;
