import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Img from "../../../../../../assets/photo/unnamed.png"
import { useHistory } from 'react-router-dom';

const PracticeCard = ({ practice }: any) => {
    const { title, practicesImage } = practice;
    const history = useHistory();


    const handleBookClick = (id:string) => {
        console.log(id);
        
        history.push(`/reading/practice/${id}`);
      }

    return (
        <Card sx={{ maxWidth: 345, margin: 2, borderRadius: 2 }} onClick = {()=>handleBookClick(practice._id)}>
            {practicesImage && practicesImage.length > 0 && (
                <CardMedia
                    component="img"
                    height="300"
                    image={Img}
                    alt={title}
                />
            )}
            <CardContent>
                <Typography variant="h4" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PracticeCard;
