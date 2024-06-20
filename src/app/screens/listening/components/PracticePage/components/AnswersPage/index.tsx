import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const AnswersPage = () => {
    const location = useLocation();

    // State to store the score
    const [score, setScore] = useState<any>(undefined);

    useEffect(() => {
        // Fetch score from localStorage
        const storedScore = localStorage.getItem('myData');
        if (storedScore) {
            setScore(JSON.parse(storedScore));
        }
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="div" sx={{ marginY: 4 }}>
                Thank you for participating!
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginY: 4 }}>
                {score !== undefined ? (
                    `You scored ${score?.correctCount} out of 40 correct answers.`
                ) : (
                    'Loading score...'
                )}
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginY: 4 }}>
                We appreciate your effort and hope you found the practice useful. Keep up the good work!
            </Typography>
        </Container>
    );
};

export default AnswersPage;
