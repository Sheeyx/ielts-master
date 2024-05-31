import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "./styles.scss";

export function BestEssays() {
    return (
        <div className='best-essays'>
            <Container maxWidth="xl">
                <Typography sx={{ textAlign: "left" }} className='title'>
                    Best Essays
                </Typography>
                <Grid container className='box' justifyContent="space-between" spacing={2.5}>
                    {[1, 2, 3].map((value) => (
                        <Grid item xs={11} sm={5.5} md={3.5} key={value} className='card'>
                            <Box sx={{mb: 2}}>
                                <Typography className='text'>
                                    The Power of Education
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container className='info' alignItems="center">
                                    <Typography className='heading'>An insightful essay on the importance of education in today's world.</Typography>
                                    <Typography className='prof'>By Emily Watson</Typography>
                                </Grid>
                                <Button className='btn'>Read More</Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
