import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import QuoteIcon from '../../../../../assets/icons/quote.svg';
import Avatar from '../../../../../assets/photo/avatar.png';
import "./styles.scss";

export function Community() {
    return (
        <div className='community'>
            <Container maxWidth="xl">
                <Typography sx={{ textAlign: "center" }} className='head-text'>
                    Join our IELTS community and connect with learners worldwide
                </Typography>
                <Grid container className='box' justifyContent="space-between" spacing={2.5}>
                    {[1, 2, 3, 4].map((value) => (
                        <Grid item xs={11} sm={5.5} md={2.5} key={value} className='card'>
                            <Box sx={{mb: 2}}>
                                <img className='quote-img' src={QuoteIcon} alt="quote" />
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography className='text'>
                                    I improved my IELTS score significantly.
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container className='info' alignItems="center" spacing={2}>
                                    <Grid item>
                                        <img src={Avatar} alt="" />
                                    </Grid>
                                    <Grid item className='info-text'>
                                        <Typography className='heading'>Sarah J.</Typography>
                                        <Typography className='prof'>Teacher</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
