import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, TextField, Button } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom'; // Import useNavigate
import ListeningService from '../../../../../../services/ListeningService';
import { serverAPI } from '../../../../../../lib/config';

const ListeningPractice = ({handleShowChange}:any) => {
    const [inputs, setInputs] = useState(Array(40).fill(''));
    const [data, setData] = useState<any>(null);
    const history = useHistory();
    const { id } = useParams<any>();
    const practiceService = new ListeningService();

    useEffect(() => {
        practiceService.getPracticeById(id)
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    const handleInputChange = (index: any, value: any) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const handleSubmit = () => {
        console.log("Collected Answers:", inputs); 
        practiceService.checkAnswers(inputs,id)
        .then(data => handleShowChange(data));
    };

    console.log(data);

    

    return (
        <Container>
            {data ? (
                <>
                    <Typography variant="h4" component="div" sx={{ marginY: 4 }}>
                        {data.title}
                    </Typography>
                    {data.audio.length > 0 && (
                        <audio controls style={{ width: '100%', marginBottom: '20px' }}>
                            <source src={data.audio[0]} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                    <Grid container spacing={4}>
                        {data.practicesImage.map((image: any, index: any) => {
                            const url = `${serverAPI}/${image}`;
                            console.log(image);
                            
                            return (
                            <Grid item xs={12}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        width="auto"
                                        image={url}
                                        alt={`Practice Image ${index + 1}`}
                                        sx={{ width: '100%' }}
                                    />
                                    <CardContent>
                                        <Grid container spacing={1}>
                                            {[...Array(10)].map((_, i) => (
                                                <Grid item xs={12} sm={6} key={i}>
                                                    <TextField
                                                        fullWidth
                                                        label={`Answer ${index * 10 + i + 1}`}
                                                        variant="outlined"
                                                        value={inputs[index * 10 + i]}
                                                        onChange={(e) => handleInputChange(index * 10 + i, e.target.value)}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>)
})}
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 4 }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </>
            ) : (
                <Typography variant="h6" component="div" sx={{ marginY: 4 }}>
                    No data
                </Typography>
            )}
        </Container>
    );
};

export default ListeningPractice;
