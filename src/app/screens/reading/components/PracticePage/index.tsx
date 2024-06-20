// Practice.jsx
import React, { useState } from 'react';
import { Container } from '@mui/material';
import AnswersPage from './components/AnswersPage';
import ReadingPractice from './components/Practice';

const Practice = () => {
    const [show,setShow] = useState(false);
    const [data,setData] = useState(false);
    console.log(show);
    const handleShowChange = (data:any) => {
        // Set the state
        setData(data);
        
        // Set show to true
        setShow(true);
    
        // Save data to localStorage
        localStorage.setItem('score', JSON.stringify(data));
    }

    console.log(data);
    
    return (
        
        <Container>
            {
            !show ?
            <ReadingPractice handleShowChange = {handleShowChange}/> :
            <AnswersPage /> }
        </Container>
    );
}

export default Practice;
